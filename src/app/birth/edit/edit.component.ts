import {Component, inject} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

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
 birth: any;
 constructor() {
   const id = this.router.snapshot.params['id'];
   if(id){
     this.httpClient.get(`http://localhost:3000/births/${id}`).subscribe((birth)=>{
       this.birth = birth;
     });
   }
 }
  saveBirth(){
   this.httpClient.put(`http://localhost:3000/births/${this.birth.id}`,this.birth).subscribe(()=>{
     this.route.navigate(['/births']);
   })
  }
}
