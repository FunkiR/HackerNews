import {combineReducers, configureStore, createListenerMiddleware} from '@reduxjs/toolkit';
import {newsApi} from '~/features/news/store';
import alertsSlice from '~/features/alerts/store';
import errorHandlerMiddleware from './middlewares/errorHandler';

const listenerMiddleware = createListenerMiddleware();

const combinedReducer = combineReducers({[newsApi.reducerPath]: newsApi.reducer, alerts: alertsSlice.reducer});

export const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([errorHandlerMiddleware, listenerMiddleware.middleware, newsApi.middleware])
});

export default store;
