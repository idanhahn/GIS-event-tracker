import {
  Component, OnInit, Input, OnChanges, ViewChild, ElementRef, Output,
  EventEmitter
} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LatLng, CancerEvent} from "../app.component";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})

export class InputFormComponent implements OnInit, OnChanges{

  @ViewChild('form-date') el:ElementRef;

  @Input() latLng: LatLng;
  @Input() address: string;
  
  @Output() submit: EventEmitter<any> = new EventEmitter();
  
  cancers: FirebaseListObservable<CancerEvent[]>;
  events:  FirebaseListObservable<CancerEvent[]>;

  eventForm: FormGroup;

  incidentSelected = false;
  incidentDescription;

  anonymousReport = false;

  now;

  options = [
    {
      value: 'cancer1',
      description:
        'סרטן - החלמה מלאה'
    },
    {
      value: 'cancer2',
      description:
        'סרטן - תוך כדי מאבק'
    },
    {
      value: 'cancer3',
      description:
        'סרטן - מקרה מוות'
    },
    {
      value: 'incident',
      description:
        'אירוע זיהום אוויר'
    }
  ];

  constructor(private af: AngularFire) {
    this.eventForm = new FormGroup({
      'type': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'date': new FormControl(''),
      'description': new FormControl(''),
      'anonymous': new FormControl(),
      'name': new FormControl(''),
      'email': new FormControl(''),
      'phone': new FormControl('')
    })
    this.cancers = af.database.list('/cancers');
    this.events = af.database.list('/events');
  }

  ngOnInit() {
    this.now = Date.now();
  }

  ngOnChanges() {
    this.eventForm.controls['address'].setValue(this.address);
  }

  onSelect(selectID){
    console.log(selectID)
    if (selectID == 'incident'){
      this.incidentSelected = true;
    } else {
      this.incidentSelected = false;
      for(let i = 0; i < this.options.length; i++){
        if (this.options[i].value == selectID)
          this.incidentDescription = this.options[i].description;
      }
    }
    console.log(this.incidentDescription)
  }

  onSubmit(){
    console.log(this.eventForm)

    let name: string;

    if (this.anonymousReport){
      name = "אנונימי"
    } else {
      name = this.eventForm.value['name'];
    }


    if (this.eventForm.value['type'] == 'incident'){
      this.incidentDescription = this.eventForm.value['description'];
    } else {

    }


    let event: CancerEvent = {
      type: this.eventForm.value['type'],
      lat: this.latLng.lat,
      lng: this.latLng.lng,
      date: Date.now(),
      address: this.eventForm.value['address'],
      name: name,
      phone: this.eventForm.value['phone'],
      email: this.eventForm.value['email'],
      description: this.incidentDescription,
      likes: 0

    }

    if (this.eventForm.value['type'] == 'incident'){
      console.log(event)
      this.events.push(event)
    } else {
      this.cancers.push(event)
    }

    this.submit.emit(null); 
    
  }


}

/*
 $('#sandbox-container input').datepicker({
 format: "dd/mm/yyyy",
 endDate: "today",
 todayBtn: "linked",
 language: "he",
 autoclose: true,
 todayHighlight: true
 });

 */
