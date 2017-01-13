import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {LatLng} from "./app.component";
import 'rxjs/Rx';

@Injectable()
export class MapService {

  constructor(private http: Http) { }

  getGeoCode(coord: LatLng){

    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      coord.lat + ',' + coord.lng + '&language=he')
      .map((response: Response) => {
        let array = response.json().results;
        console.log(array)
        if (array[0] != null){
          console.log(array[0].formatted_address)
          return array[0].formatted_address;
        }
        return "";
      });

  }


}
