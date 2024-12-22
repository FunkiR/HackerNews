import {getFormattedDate} from '~/features/news/utils';
import i18n from '~/locales';

describe(`тестирование метода ${getFormattedDate.name}`, () => {
	test('метод возвращает корректное значение для en локали', () => {
		jest.replaceProperty(i18n, 'language', 'en-ES');

		expect(getFormattedDate(1734558318)).toEqual('12/19/2024, 12:45:18 AM');
	});

	test('метод возвращает корректное значение для ru локали', () => {
		jest.replaceProperty(i18n, 'language', 'ru-RU');

		expect(getFormattedDate(1734558318)).toEqual('19.12.2024, 00:45:18');
	});
});
