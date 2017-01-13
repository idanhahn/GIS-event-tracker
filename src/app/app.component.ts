import {Component, OnInit, ViewChild} from '@angular/core';
import {MapService} from "./map.service";
import {Response} from "@angular/http";
import {ModalComponent} from "ng2-bs3-modal/ng2-bs3-modal";


export interface LatLng{
  lat: number,
  lng: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  @ViewChild('modal')
  modal: ModalComponent;

  center = {
    lat: 32.805,
    lng: 35.060,
    zoom: 13
  };

  address: string;

  constructor(private ms: MapService){}

  ngOnInit(){
  }


  onMapClick(event){
    console.log(event)
    let coord:LatLng = {
      lat: event.coords.lat,
      lng: event.coords.lng
    }

    this.ms.getGeoCode(coord)
      .subscribe(
        (address: string) => {

          this.address = address;
          
          this.modal.open()

        }
      )
  }

}
