import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetUpComponent } from './meet-up';
import {
  ParticipantsListComponent,
  ParticipantsEditComponent
} from './participants';
import { NgRxMeetupCommonModule } from '../common';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MeetUpComponent,
    ParticipantsListComponent,
    ParticipantsEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgRxMeetupCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
