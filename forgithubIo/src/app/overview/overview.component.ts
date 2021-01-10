import { Component, OnInit } from '@angular/core';
import { ANOTATIONs } from '../moc-anotation';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  anotations = ANOTATIONs;

  constructor() { }
  ngOnInit(): void {
  }

}