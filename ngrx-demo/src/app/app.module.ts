import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetUpComponent } from './meet-up';
import { ParticipantsListComponent, ParticipantsEditComponent } from './participants';
import { NgRxMeetupCommonModule } from '../common';

@NgModule({
  declarations: [AppComponent, MeetUpComponent, ParticipantsListComponent, ParticipantsEditComponent],
  imports: [BrowserModule, NgRxMeetupCommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
