import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Birth} from "../../../shared/birth";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
@Input() births :Birth[]=[];
@Output() deleteBirth =new EventEmitter<number>();
}
