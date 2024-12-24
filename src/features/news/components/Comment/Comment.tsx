import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {newsApi} from '~/features/news/store';
import {useTreeItem2} from '@mui/x-tree-view/useTreeItem2';
import {TreeItem2GroupTransition, TreeItem2Root} from '@mui/x-tree-view/TreeItem2';
import {TreeItem2Provider} from '@mui/x-tree-view/TreeItem2Provider';
import SkeletonComment from '~/features/news/components/SkeletonComment';
import CommentContent from './components/CommentContent';
import {Props} from './types';

export const Comment = ({data}: Props) => {
	const {kids} = data;
	const [isLoaded, setIsLoaded] = useState(false);
	const [getComments] = newsApi.useLazyGetCommentsQuery();
	const {data: comments, isError, isFetching, isSuccess} = newsApi.endpoints.getComments.useQueryState(kids);
	const hasResult = isError || isSuccess;
	const itemId = data.id.toString();

	useEffect(() => {
		if (hasResult) setIsLoaded(true);
	}, [hasResult]);

	const handleLoad = useCallback(() => getComments(kids), [kids]);

	const children = useMemo(() => {
		if (isFetching || (kids && !comments)) return kids?.map((id) => <SkeletonComment key={id} />);

		return comments?.map((c) => <Comment key={c.id} data={c} />);
	}, [comments, kids, isFetching]);

	const {getContentProps, getGroupTransitionProps, getRootProps} = useTreeItem2({itemId, children});

	return (
		<TreeItem2Provider itemId={itemId}>
			<TreeItem2Root {...getRootProps()}>
				<CommentContent
					{...getContentProps()}
					comment={data}
					isLoaded={isLoaded}
					isLoading={isFetching}
					onClickRefresh={handleLoad}
					onLoad={handleLoad}
				/>
				{children && <TreeItem2GroupTransition {...getGroupTransitionProps()} />}
			</TreeItem2Root>
		</TreeItem2Provider>
	);
};

export default memo(Comment);
