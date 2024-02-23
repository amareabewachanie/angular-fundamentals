import {Component, inject, OnInit} from "@angular/core";
import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector:'app-birth',
  standalone:true,
  imports: [RouterOutlet,RouterModule,CommonModule,HttpClientModule],
  templateUrl:'./birth.component.html',
  styleUrls:['./birth.component.css']
})
export class BirthComponent implements OnInit{
  births: any;
  httpClient:HttpClient = inject(HttpClient);
  ngOnInit() {
    this.httpClient.get('http://localhost:3000/births').subscribe(
      (births)=>{
        this.births = births;
      }
    )
  }
}
