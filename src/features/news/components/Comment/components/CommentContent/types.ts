import {Comment as TComment} from '~/features/news/store';
import {TreeItemContentProps} from '@mui/x-tree-view';

export type Props = TreeItemContentProps & {
	onClick: () => unknown;
	onClickRefresh: () => unknown;
	onLoad: () => unknown;
	isLoading: boolean;
	isLoaded: boolean;
	comment: TComment;
};
