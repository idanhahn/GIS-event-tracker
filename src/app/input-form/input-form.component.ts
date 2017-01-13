import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit {

  @Input() address: string;
  
  incidentSelected = false;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(selectID){
    console.log(selectID)
    if (selectID == 'incident'){
      this.incidentSelected = true;
    }
  }

}
