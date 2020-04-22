import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ConferenceComponent } from './conference.component.';
import { ConferenceListComponent } from './conference/conference-list.component';
import {ConferenceThumbnailComponent} from './conference/conference-thumnail.component'

@NgModule({
  declarations: [
    ConferenceComponent,
    ConferenceListComponent,
    ConferenceThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ConferenceComponent]
})
export class AppModule { }
