import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[appFocus]',
  standalone: true
})
export class FocusDirective {
private  el= inject(ElementRef);

  constructor() {
    this.el.nativeElement.style.backgroundColor = 'green';
  }

}
