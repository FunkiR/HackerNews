import {isRejectedWithValue, Middleware, MiddlewareAPI} from '@reduxjs/toolkit';
import {isAxiosError} from 'axios';
import {AlertType, showAlert} from '~/features/alerts/store';
import i18n from '~/locales';
import type {AppDispatch} from '~/store/types';

export const errorHandlerMiddleware: Middleware =
	({dispatch}: MiddlewareAPI<AppDispatch>) =>
	(next) =>
	(action) => {
		if (isRejectedWithValue(action)) {
			if (isAxiosError(action.payload) && action.payload.response) {
				const {status} = action.payload.response;

				if (Number.isInteger(status)) {
					dispatch(
						showAlert({
							type: AlertType.ERROR,
							text: `${i18n.t('serverError')} - ${status}`
						})
					);

					return next(action);
				}
			}

			dispatch(
				showAlert({
					type: AlertType.ERROR,
					text: i18n.t('somethingWrong')
				})
			);
		}

		return next(action);
	};

export default errorHandlerMiddleware;
