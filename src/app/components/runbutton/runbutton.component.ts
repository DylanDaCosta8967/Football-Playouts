import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-runbutton',
  templateUrl: './runbutton.component.html',
  styleUrls: ['./runbutton.component.css']
})
export class RunbuttonComponent  {
  @Input() text: string;
  @Input() colour: string;
  @Output() playBtnClick= new EventEmitter();
  constructor() {}

  onClick() {
    this.playBtnClick.emit();
  }
}
