import {resources, defaultNS} from './constants';

declare module 'i18next' {
	interface CustomTypeOptions {
		defaultNS: typeof defaultNS;
		resources: (typeof resources)['ru'];
	}
}
