import {Component, OnInit, ViewChild} from '@angular/core';
import {MapService} from "./map.service";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

export interface LatLng{
  lat: number,
  lng: number
}

export interface CancerEvent{
  type: string,
  description: string,
  lat: number,
  lng: number,
  date: number,
  address: string,
  name: string,
  phone: number,
  email: string,
  likes: number
  
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  @ViewChild('modal')
  modal: ModalComponent;
  cancers: FirebaseListObservable<CancerEvent[]>;
  events:  FirebaseListObservable<CancerEvent[]>;

  center = {
    lat: 32.805,
    lng: 35.060,
    zoom: 13
  };

  address: string;
  selectedCoords: LatLng;
  
  
  constructor(private ms: MapService, af: AngularFire){
    this.cancers = af.database.list('/cancers');
    this.events = af.database.list('/events');
  }

  ngOnInit(){
  }


  onMapClick(event){
    this.selectedCoords = {
      lat: event.coords.lat,
      lng: event.coords.lng
    }

    this.ms.getGeoCode(this.selectedCoords)
      .subscribe(
        (address: string) => {

          this.address = address;
          this.modal.open()

        }
      )
  }

  submit(){
    this.modal.close();
  }
  
}
