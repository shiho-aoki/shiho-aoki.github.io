import { Component, OnInit } from '@angular/core';
import { ANOTATIONs } from '../moc-anotation';
import { PINNED } from "../moc-pinned";
  
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  anotations = ANOTATIONs;

  pinneds = PINNED;

  constructor() { }
  ngOnInit(): void {
  }

}