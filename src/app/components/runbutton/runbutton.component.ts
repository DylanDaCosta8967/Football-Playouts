import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-runbutton',
  templateUrl: './runbutton.component.html',
  styleUrls: ['./runbutton.component.css']
})
export class RunbuttonComponent implements OnInit {
  @Input() text: string;
  @Input() colour: string;

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log("add");
  }
}
