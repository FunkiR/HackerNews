import axios, {AxiosRequestConfig} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/dist/query/react';
import type {QueryError, AxiosQueryOptions} from './types';

/**
 * Декоратор для запросов [rtk-query](https://redux-toolkit.js.org/rtk-query/usage/customizing-queries) через axios
 *
 * @param {AxiosRequestConfig} customConfig - конфиг библиотеки axios
 * @param {AxiosQueryOptions} options - различные опции по настройке запроса
 * @returns {BaseQueryFn}
 */
export const axiosBaseQuery =
	(config?: AxiosRequestConfig, options?: AxiosQueryOptions): BaseQueryFn<AxiosRequestConfig, unknown, QueryError> =>
	async (request) => {
		try {
			const result = await axios({
				...config,
				...request,
				headers: {
					...config?.headers,
					...request.headers
				},
				url: request.url ? options?.getUrl(request.url) : request?.url
			});

			return {data: result.data};
		} catch (error) {
			return {
				error: error as QueryError
			};
		}
	};
