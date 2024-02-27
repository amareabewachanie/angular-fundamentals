import {Component, inject, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class DeathAddComponent implements OnInit{
death: any = {
  id:'',
  firstName: '',
  middleName:'',
  lastName:'',
  dateOfDeath:''
};
httpClient:HttpClient=inject(HttpClient);
router:Router = inject(Router);
maxId: string ='';
ngOnInit() {
  this.httpClient.get('http://localhost:3000/deaths/').subscribe((deaths:any)=>{
    this.maxId = deaths.length+1+'';
    this.death.id=this.maxId;
  })
}

  saveDeath(addForm:NgForm){
  if(addForm.valid){
    this.httpClient.post('http://localhost:3000/deaths',this.death).subscribe(()=>{
      this.router.navigate(['/deaths']);
    })
  }
}
}
