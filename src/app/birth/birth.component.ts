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
  message:string='';
  ngOnInit() {
    this.httpClient.get('http://localhost:3000/births').subscribe(
      (births)=>{
        this.births = births;
      }
    )
  }
  deleteBirth(id: number){
    if(confirm('Are you sure you want to delete?')){
      this.httpClient.delete(`http://localhost:3000/births/${id}`).subscribe(()=>{
        this.message = 'User deleted successfully!!!';
      })
    }
  }
}
