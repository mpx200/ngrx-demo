import * as fromRoot from '../reducers/';
import { createSelector } from '@ngrx/store';
import { Participant } from '../../../common/index';

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

export const getSelectedParticipant = createSelector(
  getAllParticipants,
  fromRoot.getRouterState,
  (items, router): Participant => {
    const aaa = items.find(
      s => s.id === Number(router.state.params.participantId)
    );
    return aaa;
  }
);
