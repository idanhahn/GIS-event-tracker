import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  @Input() incident;
  
  constructor() { }

  ngOnInit() {
  }

}
