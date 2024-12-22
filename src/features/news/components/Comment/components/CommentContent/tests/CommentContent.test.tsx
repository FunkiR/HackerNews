import {CommentContent} from '~/features/news/components/Comment/components/CommentContent/CommentContent';
import {Props} from '~/features/news/components/Comment/components/CommentContent/types';
import {render, fireEvent} from '@testing-library/react';
import {Comment} from '~/features/news/store';
import {TreeItemContentProps} from '@mui/x-tree-view';

describe(`тестирование компонента ${CommentContent.name}`, () => {
	const defaultProps: Props = {
		comment: {} as Comment,
		classes: {} as TreeItemContentProps['classes'],
		itemId: '',
		onClick: jest.fn(),
		isLoading: false,
		isLoaded: false,
		onClickRefresh: jest.fn(),
		onLoad: jest.fn()
	};
	test('onLoad вызывается только в случае, когда данные еще не загружены', () => {
		const onLoadMock = jest.fn();

		const {getByTestId, rerender} = render(<CommentContent {...defaultProps} onLoad={onLoadMock} isLoaded={false} />);

		fireEvent.click(getByTestId('answerButton'));

		expect(onLoadMock).toHaveBeenCalledTimes(1);

		rerender(<CommentContent {...defaultProps} onLoad={onLoadMock} isLoaded={true} />);

		fireEvent.click(getByTestId('answerButton'));

		expect(onLoadMock).toHaveBeenCalledTimes(1);
	});

	test('onClickRefresh вызывается только в случае, когда данные уже загружены и нет активной загрузки', () => {
		const mockFn = jest.fn();

		const {getByTestId, queryByTestId, rerender} = render(
			<CommentContent {...defaultProps} onClickRefresh={mockFn} isLoaded={false} />
		);

		expect(queryByTestId('refreshButton')).toEqual(null);

		rerender(<CommentContent {...defaultProps} onClickRefresh={mockFn} isLoaded={true} isLoading={true} />);

		expect(queryByTestId('refreshButton')).toEqual(null);

		rerender(<CommentContent {...defaultProps} onClickRefresh={mockFn} isLoaded={true} isLoading={false} />);

		fireEvent.click(getByTestId('refreshButton'));

		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
