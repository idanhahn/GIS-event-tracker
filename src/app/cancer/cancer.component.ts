import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cancer',
  templateUrl: './cancer.component.html',
  styleUrls: ['./cancer.component.css']
})
export class CancerComponent implements OnInit {

  @Input() cancer;
  
  constructor() { }

  ngOnInit() {
  }

}
