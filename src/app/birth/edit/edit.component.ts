import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AlertService} from "../../shared/alert.service";
import {Birth} from "../../shared/birth";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
 birth: Birth={
   id: '0',
   firstName:'',
   lastName:'',
   middleName:'',
   dateOfBirth: new Date()
 };
 constructor(private httpClient:HttpClient,private router:Router,private route: ActivatedRoute,private alertService:AlertService) {
   const id = this.route.snapshot.params['id'];
   if(id){
     this.httpClient.get<Birth>(`http://localhost:3000/births/${id}`).subscribe((birth)=>{
       this.birth = birth;
     });
   }
 }
  saveBirth(){
   this.httpClient.put(`http://localhost:3000/births/${this.birth.id}`,this.birth).subscribe(()=>{
     this.alertService.success('You have edited successfully!')
     this.router.navigate(['/births']);
   })
  }
}
