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
import {
  RouterStateSerializer,
  StoreRouterConnectingModule
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
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
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    NgRxMeetupCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
