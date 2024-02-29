import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {DeathComponent} from "./death/death.component";
import {DeathListComponent} from "./death/list/list.component";
import {DeathAddComponent} from "./death/add/add.component";
import {EditDeathComponent} from "./death/edit/edit.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    pathMatch:'full',
  },
  {
    path:'births',
    loadChildren: ()=>import('./birth/birth.module')
      .then(m=> m.BirthModule),
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
      {
        path: 'edit/:id',
        component: EditDeathComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'home',
  },
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export  class AppRoutingModule{}
