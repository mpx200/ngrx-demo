import { createSelector } from '@ngrx/store';
import { State } from './../../store/reducers';
import { Participant } from '../../../common';
import { ParticipantActionTypes, ParticipantActions } from '../actions';

export interface ParticipantsState {
  loading: boolean;
  items: Participant[];
  error?: string;
}

const initialState: ParticipantsState = {
  loading: false,
  items: []
};

export function reducer(
  state: ParticipantsState = initialState,
  action: ParticipantActions
): ParticipantsState {
  switch (action.type) {
    case ParticipantActionTypes.PARTICIPANTS_FETCH_START:
      return {
        ...state,
        loading: true
      };

    case ParticipantActionTypes.PARTICIPANTS_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case ParticipantActionTypes.PARTICIPANTS_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ParticipantActionTypes.PARTICIPANTS_EDIT_START:
      return {
        ...state,
        loading: true
      };

    case ParticipantActionTypes.PARTICIPANTS_EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case ParticipantActionTypes.PARTICIPANTS_EDIT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };


      case ParticipantActionTypes.PARTICIPANTS_REMOVE_START:
      return {
        ...state,
        loading: true
      };

    case ParticipantActionTypes.PARTICIPANTS_REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case ParticipantActionTypes.PARTICIPANTS_REMOVE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
