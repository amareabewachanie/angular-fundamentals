import {Component, inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-birth-detail',
  standalone: true,
  imports: [
    HttpClientModule
  ],
  templateUrl: './birth-detail.component.html',
  styleUrl: './birth-detail.component.css'
})
export class BirthDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  httpClient: HttpClient = inject(HttpClient);
  birthId :number = 0;
  birth : any;
  constructor() {
    this.birthId = this.route.snapshot.params['id'];
    if(this.birthId){
      this.httpClient.get(`http://localhost:3000/births/?id=${this.birthId}`).subscribe((birth: any)=>{
        this.birth = birth[0];
      });
    }
  }
}
