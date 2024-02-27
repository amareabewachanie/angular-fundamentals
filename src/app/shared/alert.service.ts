import { Injectable } from '@angular/core';
declare let alertify: any;
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor() {
    alertify.set('notifier','position','top-center');
  }
  confirm(message: string, okCallback:()=>any){
    alertify.confirm(message,function(e:any){
      if(e){
        okCallback();
      }
    });
  }
  success(message:string){
    alertify.success(message);
  }
  error(message:string){
    alertify.error(message);
  }
  warning(message:string){
    alertify.warning(message);
  }
  message(message:string){
    alertify.message(message);
  }
}
