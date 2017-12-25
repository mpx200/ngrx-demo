import * as fromRoot from '../reducers/';
import { createSelector } from '@ngrx/store';

export const getAllParticipants = createSelector(
  fromRoot.getParticipantsState,
  state => state.items
);
export const getParticipantsLoading = createSelector(
  fromRoot.getParticipantsState,
  state => state.loading
);
export const getParticipantsError = createSelector(
  fromRoot.getParticipantsState,
  state => state.error
);
