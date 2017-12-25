import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Participant } from '../../../../common';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';
import * as fromStore from '../../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.scss']
})
export class ParticipantsEditComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<fromStore.State>,
    private router: Router
  ) {}

  participantGroup: FormGroup;
  private sub: any;
  id: number;
  selectedParticipant$: Observable<Participant>;
  selectedParticipant: Participant;

  ngOnInit() {
    this.createForm();
    this.selectedParticipant$ = this.store.select(
      fromStore.getSelectedParticipant
    );
    this.selectedParticipant$.subscribe(p => {
      if (p) {
        this.selectedParticipant = p;
        this.setValueForm(this.selectedParticipant);
      }
    });
  }

  createForm() {
    this.participantGroup = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  setValueForm(part: Participant) {
    this.participantGroup.setValue({
      name: part.name,
      surname: part.surname,
      company: part.company,
      location: part.location
    });
  }

  onSubmit({ value, valid }: { value: Participant; valid: boolean }) {
    value.id = this.selectedParticipant.id;
    value.imageSrc = this.selectedParticipant.imageSrc;
    this.store.dispatch(new fromStore.ParticipantsEditStartAction(value));
  }
}
