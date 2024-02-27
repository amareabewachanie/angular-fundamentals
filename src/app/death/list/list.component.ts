import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
    imports: [
       CommonModule,HttpClientModule,RouterModule
    ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class DeathListComponent implements  OnInit{
 httpClient: HttpClient= inject(HttpClient);
 deaths:any;
  message='';
 ngOnInit() {
   this.loadDeaths();
 }
  deleteDeath(deathId: number){
    this.httpClient.delete(`http://localhost:3000/deaths/${deathId}`)
      .subscribe(()=>{
        this.message = 'Successfully deleted!!';
        this.loadDeaths();
      });
  }
  loadDeaths() {
       this.httpClient.get('http://localhost:3000/deaths')
         .subscribe((deaths:any)=>{
           this.deaths = deaths;
         });
    }
}
