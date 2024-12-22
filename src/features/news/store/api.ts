import {createApi} from '@reduxjs/toolkit/query/react';
import {axiosBaseQuery} from '~/store/axiosBaseQuery';
import {ENDPOINTS, CONFIG} from '~/constants/index';
import type {Story, Comment} from './types';
console.log(CONFIG.requestCacheTime);
export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: axiosBaseQuery({baseURL: CONFIG.hackerNewsApi}, {getUrl: (url) => `${url}.json?print=pretty`}),
	keepUnusedDataFor: CONFIG.requestCacheTime,
	endpoints: (builder) => ({
		getNewIds: builder.query<number[], void>({
			query: () => ({
				method: 'GET',
				url: ENDPOINTS.news.getNewNewsIds
			})
		}),
		getStories: builder.query<Story[], number[]>({
			queryFn: async (ids, api, options, baseQuery) => {
				if (ids.length === 0) return [];

				try {
					const data = await Promise.all(
						ids.map((id) => baseQuery({method: 'GET', url: ENDPOINTS.news.getNewsItem.replace(':id', String(id))}))
					);

					return {data: data.map((item) => item.data) as Story[]};
				} catch (error) {
					return error;
				}
			}
		}),
		getComments: builder.query<Comment[], number[] | undefined>({
			queryFn: async (ids, api, options, baseQuery) => {
				if (!ids?.length) return [];

				try {
					const data = await Promise.all(
						ids.map((id) => baseQuery({method: 'GET', url: ENDPOINTS.news.getNewsItem.replace(':id', String(id))}))
					);

					return {data: data.map((item) => item.data) as Story[]};
				} catch (error) {
					return error;
				}
			}
		}),
		getStory: builder.query<Story, number>({
			query: (id) => ({
				method: 'GET',
				url: ENDPOINTS.news.getNewsItem.replace(':id', String(id))
			})
		}),
		getComment: builder.query<Comment, number>({
			query: (id) => ({
				method: 'GET',
				url: ENDPOINTS.news.getNewsItem.replace(':id', String(id))
			})
		})
	})
});

export default newsApi;
