import { Routes } from '@angular/router';
import {
  ParticipantsEditComponent,
  ParticipantsListComponent
} from './participants';
import { MeetUpComponent } from './meet-up';

export const routes: Routes = [
  { path: '', redirectTo: '/meetup', pathMatch: 'full' },
  { path: 'meetup', component: MeetUpComponent },
  { path: 'meetup/part/:participantId', component: ParticipantsEditComponent },
  { path: 'meetup/part', component: ParticipantsListComponent }
];

