import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange
} from '@angular/core';
import { Participants } from '../../../../common';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  constructor() {}

  @Input() public participants: Participants[];
  @Output() public deleteParticipants = new EventEmitter();
  @Output() public editParticipants = new EventEmitter();

  ngOnInit() {}

  onDeleteParticipants(participant: Participants) {
    this.deleteParticipants.emit(participant);
  }
  onEditParticipants(participant: Participants) {
    this.editParticipants.emit(participant);
  }
}
