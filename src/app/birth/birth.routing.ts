import {ListComponent} from "./list/list.component";
import {AddComponent} from "./add/add.component";
import {BirthDetailComponent} from "./birth-detail/birth-detail.component";
import {EditComponent} from "./edit/edit.component";
import {Routes} from "@angular/router";

export const birthRoutes: Routes =[
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
  }];
