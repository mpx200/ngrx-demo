import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Participant, ParticipantsService } from '../../../../common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStore from '../../../store';

@Component({
  selector: 'app-meet-up',
  templateUrl: './meet-up.component.html',
  styleUrls: ['./meet-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetUpComponent implements OnInit {
  constructor(private store: Store<fromStore.State>) {}

  public participants$: Observable<Participant[]>;
  public loadingData$: Observable<boolean>;
  ngOnInit() {
    this.store.dispatch(new fromStore.ParticipantsFetchStartAction());
    this.participants$ = this.store.select(fromStore.getAllParticipants);
    this.loadingData$ = this.store.select(fromStore.getParticipantsLoading);
  }

  onDeleteParticipant(participant: Participant) {
    this.store.dispatch(new fromStore.ParticipantsRemoveStartAction(participant));
  }
}
