import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AlertService} from "../../shared/alert.service";
import {Birth} from "../../shared/birth";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
  births: Birth[]=[];
  message:string='';
  displayType: number=0;
  constructor(private httpClient: HttpClient,private alertService: AlertService) {
  }
  ngOnInit() {
    this.loadBirths();
  }
  loadBirths(){
    this.httpClient.get<Birth[]>('http://localhost:3000/births').subscribe(
      (births:Birth[])=>{
        this.births = births;
      }
    )
  }
  deleteBirth(id: number){
    if(confirm('Are you sure you want to delete?')){
      this.httpClient.delete(`http://localhost:3000/births/${id}`).subscribe(()=>{
        this.message = 'User deleted successfully!!!';
        this.alertService.success(this.message);
        this.loadBirths();
      });
    }
  }
}
