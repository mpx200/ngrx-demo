import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as fromActions from '../actions';

import {
  catchError,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';

import { ParticipantsService, Participant } from '../../../common';

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class ParticipantsEffects {
  @Effect()
  public list$: Observable<any> = this.actions$
    .ofType(fromActions.ParticipantActionTypes.PARTICIPANTS_FETCH_START)
    .pipe(
      switchMap(() => {
        return this.participantsService
          .getParticipants()
          .pipe(
            map(
              participant =>
                new fromActions.ParticipantsFetchSuccessAction(participant)
            ),
            catchError(error =>
              of(new fromActions.ParticipantsFetchFailAction(error))
            )
          );
      })
    );

  constructor(
    private actions$: Actions<{ type: any; payload: any }>,
    private participantsService: ParticipantsService
  ) {}
}
