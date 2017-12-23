import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticipantsService } from './services';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    RouterModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ParticipantsService]
})
export class NgRxMeetupCommonModule {}
