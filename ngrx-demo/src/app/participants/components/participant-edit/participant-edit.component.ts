import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Participant, ParticipantsService } from '../../../../common/index';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html',
  styleUrls: ['./participant-edit.component.scss']
})
export class ParticipantsEditComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private participantService: ParticipantsService,
    private router: Router
  ) {}

  participantGroup: FormGroup;
  private sub: any;
  id: number;
  selectedParticipant: Participant;
  ngOnInit() {
    this.createForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.participantService.getParticipant(this.id).subscribe(p => {
        this.selectedParticipant = p;
        this.setValueForm(p);
      });
    });
  }

  createForm() {
    this.participantGroup = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', Validators.required],
      company: ['', Validators.required],
      // imageSrc: new FormControl(''),
      location: ['', Validators.required]
    });
  }

  setValueForm(part: Participant) {
    this.participantGroup.setValue({
      name: part.name,
      surname: part.surname,
      company: part.company,
      // imageSrc: new FormControl(''),
      location: part.location
    });
  }

  onSubmit({ value, valid }: { value: Participant; valid: boolean }) {
    value.id = this.selectedParticipant.id;
    value.imageSrc = this.selectedParticipant.imageSrc;
    this.participantService.saveParticipant(value).subscribe(p => {
      console.log(p);
      console.log('edited');
      this.router.navigate([`/meetup`]);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
