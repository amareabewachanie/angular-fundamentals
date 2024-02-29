import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AlertService} from "../../shared/alert.service";

@Component({
  selector: 'app-edit',
  standalone: true,
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
      RouterModule,
      HttpClientModule
    ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditDeathComponent implements OnInit{
  deathForm:any;
  fb: FormBuilder = inject(FormBuilder);
  route:ActivatedRoute = inject(ActivatedRoute);
  router: Router =inject(Router);
  httpClient: HttpClient = inject(HttpClient);
  alertService: AlertService = inject(AlertService);
  deathId=0;
  ngOnInit() {
    this.deathId=this.route.snapshot.params['id'];
    this.deathForm =this.fb.group({
      id:[''],
      firstName: ['',Validators.required],
      middleName: ['',Validators.required],
      lastName:['',Validators.required],
      dateOfDeath:['',Validators.required]
    });
    this.fetchDeath();
  }

   fetchDeath() {
    this.httpClient.get(`http://localhost:3000/deaths/${this.deathId}`)
      .subscribe((death: any)=>{
        this.deathForm.patchValue(death)
      });
  }
  saveDeath(){
    if(this.deathForm.valid){
      this.httpClient.put(`http://localhost:3000/deaths/${this.deathId}`,this.deathForm.value)
        .subscribe(()=>{
        this.alertService.success('You have edited successfully');
        this.router.navigate(['/deaths'])
      });
    }
  }
}
