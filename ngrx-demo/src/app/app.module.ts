import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MeetUpComponent } from './meet-up/meet-up.component';
import { ParticipantsComponent } from './participants/participants.component';


@NgModule({
  declarations: [
    AppComponent,
    MeetUpComponent,
    ParticipantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
