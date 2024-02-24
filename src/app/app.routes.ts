import { Routes } from '@angular/router';
import {BirthComponent} from "./birth/birth.component";
import {BirthDetailComponent} from "./birth/birth-detail/birth-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EditComponent} from "./birth/edit/edit.component";

export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch:'full',
  },
  {
    path:'births',
    component: BirthComponent,
    children:[]
  },
  {
    path:"births/:id",
    component:BirthDetailComponent
  },
  {
    path:'births/edit/:id',
    component:EditComponent
  },
  {
    path:'**',
    redirectTo:'home',
  }
];
