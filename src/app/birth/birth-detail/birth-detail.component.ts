import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-birth-detail',
  standalone: true,
  imports: [
    HttpClientModule,RouterModule
  ],
  templateUrl: './birth-detail.component.html',
  styleUrl: './birth-detail.component.css'
})
export class BirthDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router =inject(Router);
  httpClient: HttpClient = inject(HttpClient);
  birthId :number = 0;
  birth : any;
  constructor() {
    this.birthId = this.route.snapshot.params['id'];
    if(this.birthId){
      this.httpClient.get(`http://localhost:3000/births/${this.birthId}`)
        .subscribe((birth)=>{
        this.birth = birth;
        this.birth.fullName = this.birth.firstName + ' '+this.birth.middleName+' '+this.birth.lastName;
      });
    }
  }
  deleteBirth(id: number){
     if(confirm('Are you sure you want to delete?')){
       this.httpClient.delete(`http://localhost:3000/births/${id}`).subscribe(()=>{
         this.router.navigate(['/births']);
       })
     }
  }
}
