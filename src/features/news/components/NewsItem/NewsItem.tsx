import {Container, CircularProgress, Link, IconButton, Typography, Box} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RefreshIcon from '@mui/icons-material/Refresh';
import {getFormattedDate} from '~/features/news/utils';
import Comment from '~/features/news/components/Comment';
import {newsApi} from '~/features/news/store';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import SkeletonComment from '~/features/news/components/SkeletonComment';
import {memo} from 'react';
import {Props} from './types';
import {Page, Title, Info, TreeView, CommentsHeader} from './styled';

export const NewsItem = ({newsItem}: Props) => {
	const {by, kids, time, title, url} = newsItem;
	const {t} = useTranslation();
	const [getComments, {data: comments, isFetching}] = newsApi.useLazyGetCommentsQuery();
	const commentsCount = kids?.length ?? 0;

	useEffect(() => {
		getComments(kids, true);
	}, [kids]);

	return (
		<Container maxWidth="md" sx={{mt: 2}}>
			<Page>
				<Box>
					<Title variant="h4">{title}</Title>
					{url && (
						<Link href={url} target="_blank">
							<OpenInNewIcon />
						</Link>
					)}
				</Box>
				<Info>
					<Typography variant="subtitle1">{by}</Typography>
					<Typography variant="subtitle1">{getFormattedDate(time)}</Typography>
				</Info>
				<Box mt={1}>
					<CommentsHeader>
						<Typography variant="body1">{`${commentsCount} ${t('comment', {count: commentsCount})}`}</Typography>
						<Box ml={0.5}>
							{isFetching ? (
								<CircularProgress size={15} />
							) : (
								<IconButton color="primary" onClick={() => getComments(kids)} size="small">
									<RefreshIcon />
								</IconButton>
							)}
						</Box>
					</CommentsHeader>
					{comments?.length && !isFetching ? (
						<TreeView sx={{mt: 1}}>
							{comments.map((comment) => (
								<Comment key={comment.id} data={comment} />
							))}
						</TreeView>
					) : (
						kids?.map((id) => <SkeletonComment key={id} />)
					)}
				</Box>
			</Page>
		</Container>
	);
};

export default memo(NewsItem);
