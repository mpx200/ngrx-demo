import { Action } from '@ngrx/store';

export const ParticipantActionTypes = {
  PARTICIPANTS_EDIT_START: '[Participant Edit] edit start',
  PARTICIPANTS_EDIT_SUCCESS: '[Participant Edit] edit success',
  PARTICIPANTS_EDIT_ERROR: '[Participant Edit] edit error',
  PARTICIPANTS_FETCH_START: '[Participant List] fetch start',
  PARTICIPANTS_FETCH_SUCCESS: '[Participant List] fetch success',
  PARTICIPANTS_FETCH_ERROR: '[Participant List] fetch error',
  PARTICIPANTS_REMOVE_START: '[Participant List] remove start',
  PARTICIPANTS_REMOVE_SUCCESS: '[Participant List] remove success',
  PARTICIPANTS_REMOVE_FAIL: '[Participant List] remove fail'
};

export class ParticipantsFetchStartAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_FETCH_START;
  constructor(public payload?: any) {}
}

export class ParticipantsFetchSuccessAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_FETCH_SUCCESS;

  public static of(payload: any) {
    return new ParticipantsFetchSuccessAction(payload);
  }
  constructor(public payload: any[]) {}
}

export class ParticipantsFetchFailAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_FETCH_ERROR;
  public static of(payload: any) {
    return new ParticipantsFetchFailAction(payload);
  }
  constructor(public payload: any) {}
}

export class ParticipantsEditStartAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_EDIT_START;
  public static of(payload: any) {
    return new ParticipantsEditStartAction(payload);
  }
  constructor(public payload: any) {}
}

export class ParticipantsEditSuccessAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_EDIT_SUCCESS;
  public static of(payload: any) {
    return new ParticipantsEditSuccessAction(payload);
  }

  constructor(public payload: any) {}
}

export class ParticipantsEditFailAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_EDIT_ERROR;
  public static of(payload: any) {
    return new ParticipantsEditFailAction(payload);
  }

  constructor(public payload: any[]) {}
}

export class ParticipantsRemoveStartAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_REMOVE_START;

  constructor(public payload: any) {}
}

export class ParticipantsRemoveSuccessAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_REMOVE_SUCCESS;
  public static of(payload: any) {
    console.log('payload');
    console.log(payload);
    return new ParticipantsRemoveSuccessAction(payload);
  }

  constructor(public payload: any) { }
}

export class ParticipantsRemoveFailAction implements Action {
  public type = ParticipantActionTypes.PARTICIPANTS_REMOVE_FAIL;
  public static of(payload: any) {
    return new ParticipantsRemoveFailAction(payload);
  }

  constructor(public payload: any) {}
}

export type ParticipantActions =
  | ParticipantsEditStartAction
  | ParticipantsEditSuccessAction
  | ParticipantsEditFailAction
  | ParticipantsFetchStartAction
  | ParticipantsFetchSuccessAction
  | ParticipantsFetchFailAction
  | ParticipantsRemoveStartAction
  | ParticipantsRemoveSuccessAction
  | ParticipantsRemoveFailAction;
