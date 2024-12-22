import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '~/store/types';

export const selectAlerts = createSelector(
	(state: RootState) => state.alerts,
	(modals) => modals
);
