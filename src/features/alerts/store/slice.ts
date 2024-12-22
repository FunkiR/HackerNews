import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v4 as uuid} from 'uuid';
import {AlertsState, Alert} from './types';

export const modalsSlice = createSlice({
	initialState: [] as AlertsState,
	name: 'alerts',
	reducers: {
		hideAlert: (state, {payload}: PayloadAction<string>) => state.filter(({id}) => id !== payload),
		showAlert: (state, {payload}: PayloadAction<Alert>) => [
			...state,
			{
				id: uuid(),
				data: payload
			}
		]
	}
});

export default modalsSlice;
