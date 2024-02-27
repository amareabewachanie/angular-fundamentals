import { Routes } from '@angular/router';
import {BirthComponent} from "./birth/birth.component";
import {BirthDetailComponent} from "./birth/birth-detail/birth-detail.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EditComponent} from "./birth/edit/edit.component";
import {AddComponent} from "./birth/add/add.component";
import {ListComponent} from "./birth/list/list.component";
import {DeathComponent} from "./death/death.component";
import {DeathListComponent} from "./death/list/list.component";
import {DeathAddComponent} from "./death/add/add.component";

export const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch:'full',
  },
  {
    path:'births',
    component: BirthComponent,
    children:[
      {
        path:'',
        pathMatch:'full',
        component: ListComponent
      },
      {
        path:'add',
        pathMatch:'full',
        component: AddComponent
      },
      {
        path:":id",
        pathMatch:'full',
        component:BirthDetailComponent
      },
      {
        path:'edit/:id',
        pathMatch: 'full',
        component:EditComponent
    },]
  },
  {
    path:'deaths',
    component: DeathComponent,
    children:[
      {
        path: '',
        component: DeathListComponent
      },
      {
        path:'add',
        component: DeathAddComponent
      },
    ]
  },
  {
    path:'**',
    redirectTo:'home',
  },
];
