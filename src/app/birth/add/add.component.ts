import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormsModule, NgForm} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {AlertService} from "../../shared/alert.service";


@Component({
  selector: 'app-add',


  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{
  birth = {
    id:'',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
  };
  lastId:string = '';
  births: any;
  constructor(private router: Router,private httpClient: HttpClient, private alertService:AlertService) {
  }
  ngOnInit() {
    this.httpClient.get("http://localhost:3000/births").subscribe((births: any)=>{
      this.births = births;
      this.lastId = this.births.length+1+'';
      this.birth.id=this.lastId;
    });
  }

  saveBirth(addForm: NgForm){

    if(addForm.valid) {
      this.httpClient.post("http://localhost:3000/births", this.birth).subscribe(() => {
        this.alertService.success('Birth Added successfully!');
        this.router.navigate(['/births']);
      });
    }
  }
}
