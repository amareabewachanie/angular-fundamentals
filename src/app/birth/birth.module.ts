import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AddComponent} from "./add/add.component";
import {ListComponent} from "./list/list.component";
import {EditComponent} from "./edit/edit.component";
import {BirthDetailComponent} from "./birth-detail/birth-detail.component";
import {AlertService} from "../shared/alert.service";
import {birthRoutes} from "./birth.routing";
import {BrowserModule} from "@angular/platform-browser";
import {BirthComponent} from "./birth.component";
import {FocusDirective} from "../shared/focus.directive";
import {TableComponent} from "./list/table/table.component";
import {GridComponent} from "./list/grid/grid.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(birthRoutes),
    FocusDirective
  ],
  declarations:[AddComponent,BirthComponent,ListComponent,
    EditComponent, BirthDetailComponent,TableComponent,GridComponent],
  providers:[AlertService],
})
export class BirthModule{}
