import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Birth} from "../../shared/birth";

@Component({
  selector: 'app-birth-detail',
  templateUrl: './birth-detail.component.html',
  styleUrl: './birth-detail.component.css'
})
export class BirthDetailComponent {
  birthId :number = 0;
  birth : Birth={
    id: '0',
    firstName:'',
    lastName:'',
    middleName:'',
    dateOfBirth: new Date()
  };
  constructor(private route: ActivatedRoute, private router: Router,private httpClient:HttpClient) {
    this.birthId = this.route.snapshot.params['id'];
    if(this.birthId){
      this.httpClient.get<Birth>(`http://localhost:3000/births/${this.birthId}`)
        .subscribe((birth)=>{
        this.birth = birth;
        this.birth.firstName + ' '+this.birth.middleName+' '+this.birth.lastName;
      });
    }
  }
  deleteBirth(id: string){
     if(confirm('Are you sure you want to delete?')){
       this.httpClient.delete(`http://localhost:3000/births/${id}`).subscribe(()=>{
         this.router.navigate(['/births']);
       })
     }
  }

  protected readonly parseInt = parseInt;
}
