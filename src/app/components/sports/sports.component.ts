import { Component } from '@angular/core';
import {HOCKEY, SOCCER, NETBALL} from  '../../sports-data';
import {Hockey, Soccer, NetBall} from  '../../Sport';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
hockey: Hockey = HOCKEY;
soccer: Soccer = SOCCER;
netball: NetBall = NETBALL;
}
