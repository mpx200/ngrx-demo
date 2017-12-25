import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { Participant } from '../../../../common';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  constructor() {}

  @Input() public participants$: Observable<Participant[]>;
  @Input() public loading$: Observable<boolean>;
  @Output() public deleteParticipants = new EventEmitter();
  @Output() public editParticipants = new EventEmitter();

  ngOnInit() {}

  onDeleteParticipants(participant: Participant) {
    this.deleteParticipants.emit(participant);
  }

}
