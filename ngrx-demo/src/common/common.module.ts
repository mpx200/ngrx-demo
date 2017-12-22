import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticipantsService } from './services';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule
  ],
  exports: [
    RouterModule,
    MatListModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ParticipantsService]
})
export class NgRxMeetupCommonModule {}
