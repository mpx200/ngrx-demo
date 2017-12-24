import { Component, OnInit } from '@angular/core';
import { Participant, ParticipantsService } from '../../../../common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-meet-up',
  templateUrl: './meet-up.component.html',
  styleUrls: ['./meet-up.component.scss']
})
export class MeetUpComponent implements OnInit {
  constructor(private store: Store<fromStore.State>) {}
  // constructor(private participantService: ParticipantsService) {}
  // public loadingData = false;
  public participants: Participant[];
  ngOnInit() {
    this.store.select(fromStore.getAllParticipants).subscribe(p => {
      this.participants = p;
    });
    this.store.dispatch(new fromStore.ParticipantsFetchStartAction());

    // this.loadingData = true;
    // this.participantService.getParticipants().subscribe(p => {
    //   this.participants = p;
    //   this.loadingData = false;
    // });
  }

  onDeleteParticipant(participant: Participant) {
    // console.log('delete participants');
    // console.log(participant);
    // this.participantService.deleteParticipant(participant).subscribe(p => {
    //   console.log(p);
    //   this.participants = p;
    // });
  }
}
