import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import {AppComponent} from './app.component';
import {InputFormComponent} from './input-form/input-form.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import {Ng2Bs3ModalModule} from 'ng2-bs3-modal/ng2-bs3-modal';
import {MapService} from "./map.service";
import {AngularFireModule} from "angularfire2";
import {ImageUploadModule} from "angular2-image-upload/index";
import { IncidentComponent } from './incident/incident.component';
import { CancerComponent } from './cancer/cancer.component';
import { MapComponent } from './map/map.component';


// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBpVwyOPWTqN3GNvP9e25_VF--Ha58MdDM",
  authDomain: "cancer-mvp.firebaseapp.com",
  databaseURL: "https://cancer-mvp.firebaseio.com",
  storageBucket: "cancer-mvp.appspot.com",
  messagingSenderId: "720121103521"
};


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    IncidentComponent,
    CancerComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component:MapComponent}
    ]),
    ImageUploadModule.forRoot(),
    Ng2Bs3ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjh8jO3wHQvabtnAFIzIsHRoJ-ehNxl9I',
      language: 'he'
    }),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
