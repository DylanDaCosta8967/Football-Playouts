import { Component, OnInit, Input, output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-runbutton',
  templateUrl: './runbutton.component.html',
  styleUrls: ['./runbutton.component.css']
})
export class RunbuttonComponent implements OnInit {
  @Input() text: string;
  @Input() colour: string;
  @output() playBtnClick= new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.playBtnClick.emit();
  }
}
