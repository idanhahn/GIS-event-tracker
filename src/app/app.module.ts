import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputFormComponent } from './input-form/input-form.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {MapService} from "./map.service";


@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Bs3ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjh8jO3wHQvabtnAFIzIsHRoJ-ehNxl9I',
      language: 'he'
    })
  ],
  providers: [
    MapService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
