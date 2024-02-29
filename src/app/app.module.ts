import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FocusDirective} from "./shared/focus.directive";

@NgModule({
  imports:[
    CommonModule,AppRoutingModule,BrowserModule],
  declarations:[AppComponent],
  bootstrap:[AppComponent]
})
export class AppModule{}
