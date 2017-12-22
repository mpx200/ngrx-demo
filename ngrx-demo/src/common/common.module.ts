import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParticipantsService } from './services';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [CommonModule, RouterModule, BrowserAnimationsModule, MatListModule],
  exports: [RouterModule, MatListModule, BrowserAnimationsModule ],
  providers: [ParticipantsService]
})
export class NgRxMeetupCommonModule {}
