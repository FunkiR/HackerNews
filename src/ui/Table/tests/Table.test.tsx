import {Table} from '~/ui/Table/Table';
import {render, fireEvent} from '@testing-library/react';

describe(`тестирование компонента ${Table.name}`, () => {
	const defaultProps = {data: [], columns: []};

	test('прогресс не отображается, когда нет загрузки', () => {
		const {queryByTestId} = render(<Table {...defaultProps} />);

		expect(queryByTestId('progress')).toEqual(null);
	});

	test('прогресс отображается, когда загрузка есть', () => {
		const {queryByTestId} = render(<Table {...defaultProps} isLoading={true} />);

		expect(queryByTestId('progress')).not.toEqual(null);
	});

	test('при отсутствии данных отображается сообщение', () => {
		const {queryByTestId} = render(<Table {...defaultProps} />);

		expect(queryByTestId('noData')).not.toEqual(null);
	});

	test('при клике по строке вызывается колбэк с данными строки', () => {
		const fn = jest.fn();
		const data = [
			{test1: 'text1', test2: 'text1'},
			{test1: 'text2', test2: 'text2'}
		];
		const columns = [{accessorKey: 'test1'}, {accessorKey: 'test2'}];
		const {getAllByTestId} = render(<Table data={data} columns={columns} onRowClick={fn} />);

		fireEvent.click(getAllByTestId('dataRow')[1]);

		expect(fn).toHaveBeenCalledWith(data[1]);
	});
});
