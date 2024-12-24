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

		const {getByTestId, rerender} = render(<CommentContent {...defaultProps} isLoaded={false} onLoad={onLoadMock} />);

		fireEvent.click(getByTestId('answerButton'));

		expect(onLoadMock).toHaveBeenCalledTimes(1);

		rerender(<CommentContent {...defaultProps} isLoaded={true} onLoad={onLoadMock} />);

		fireEvent.click(getByTestId('answerButton'));

		expect(onLoadMock).toHaveBeenCalledTimes(1);
	});

	test('onClickRefresh вызывается только в случае, когда данные уже загружены и нет активной загрузки', () => {
		const mockFn = jest.fn();

		const {getByTestId, queryByTestId, rerender} = render(
			<CommentContent {...defaultProps} isLoaded={false} onClickRefresh={mockFn} />
		);

		expect(queryByTestId('refreshButton')).toEqual(null);

		rerender(<CommentContent {...defaultProps} isLoaded={true} isLoading={true} onClickRefresh={mockFn} />);

		expect(queryByTestId('refreshButton')).toEqual(null);

		rerender(<CommentContent {...defaultProps} isLoaded={true} isLoading={false} onClickRefresh={mockFn} />);

		fireEvent.click(getByTestId('refreshButton'));

		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});
