import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Birth} from "../../../shared/birth";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
 @Input() births: Birth[]=[];
 @Output() deleteBirth = new EventEmitter<number>();
}
