import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AlertService} from "../../shared/alert.service";
import {Birth} from "../../shared/birth";

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [HttpClientModule,RouterModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  httpClient: HttpClient =inject(HttpClient)
  router: ActivatedRoute = inject(ActivatedRoute)
  route: Router = inject(Router)
  alertService: AlertService = inject(AlertService);
 birth: Birth={
   id: '0',
   firstName:'',
   lastName:'',
   middleName:'',
   dateOfBirth: new Date()
 };
 constructor() {
   const id = this.router.snapshot.params['id'];
   if(id){
     this.httpClient.get<Birth>(`http://localhost:3000/births/${id}`).subscribe((birth)=>{
       this.birth = birth;
     });
   }
 }
  saveBirth(){
   this.httpClient.put(`http://localhost:3000/births/${this.birth.id}`,this.birth).subscribe(()=>{
     this.alertService.success('You have edited successfully!')
     this.route.navigate(['/births']);
   })
  }
}
