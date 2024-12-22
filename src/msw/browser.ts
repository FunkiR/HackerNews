import {http, HttpResponse} from 'msw';
import {setupWorker} from 'msw/browser';
import {CONFIG, ENDPOINTS} from '~/constants/index';
import {TOP_NEWS_IDS, TOP_NEWS} from './data';

export const handlers = [
	http.get(`${CONFIG.hackerNewsApi}${ENDPOINTS.news.getNewNewsIds}.*`, () => HttpResponse.json(TOP_NEWS_IDS)),
	http.get(`${CONFIG.hackerNewsApi}${ENDPOINTS.news.getNewsItem}.*`, async ({params}) => {
		const {id} = params;

		return HttpResponse.json(TOP_NEWS.get(id));
	})
];

export const worker = setupWorker(...handlers);
