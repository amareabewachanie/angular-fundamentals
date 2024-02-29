import {AfterViewInit, Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import moment from "moment/moment";
import {Death} from "../../shared/death";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class DeathAddComponent implements AfterViewInit{
death: any = {
  id:'',
  firstName: '',
  middleName:'',
  lastName:'',
  dateOfDeath:''
};
httpClient:HttpClient=inject(HttpClient);
router:Router = inject(Router);
fb: FormBuilder = inject(FormBuilder);
maxId: string ='';
deathForm :any;
deaths: Death[]=[];
constructor() {
  this.loadData();
}
ngAfterViewInit() {
  this.deathForm =this.fb.group({
    firstName: ['',Validators.required],
    middleName: ['',Validators.required],
    lastName:['',Validators.required],
    dateOfDeath:['',Validators.required]
  }, {
    validators: [this.deathValidaor]
  });
}
loadData(){
  this.httpClient.get<Death[]>('http://localhost:3000/deaths/').subscribe((deaths:Death[])=>{
    this.maxId = deaths.length+1+'';
    this.deaths = deaths;
    this.death.id=this.maxId;
  });
}
  saveDeath(){
  if(this.deathForm.valid){
    this.httpClient.post('http://localhost:3000/deaths',this.deathForm.value).subscribe(()=>{
      this.router.navigate(['/deaths']);
    })
  }else{
    return;
  }
}
firstNameValidator(df: FormGroup){
  return df.get('firstName')?.value === 'Test' ? {misMatch: true}:null;
}
deathValidaor(fg: FormGroup) {
  if (this.deaths.length > 0) {

    if (this.deaths.find(a => a.firstName === fg?.get('firstName')?.value && a.middleName === fg?.get('middleName')?.value && a.firstName === fg?.get('lastName')?.value)) {
      return {'recordExists': true};
    }
    return null;
  }
  return null;
}
}
