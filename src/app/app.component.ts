import {Component, OnInit} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  ngOnInit(){
    
    var haifa = {
      lat: 32.805,
      lng: 35.060
    };
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: haifa
    });
  
  
  }

}
