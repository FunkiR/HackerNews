import {useCallback, useMemo} from 'react';
import {newsApi, Story} from '~/features/news/store';
import {useNavigate} from 'react-router';
import PAGES from '~/constants/pages';
import Typography from '@mui/material/Typography';
import {useTranslation} from 'react-i18next';
import Container from '@mui/material/Container';
import {CONFIG} from '~/constants';
import {Header, Page, RefreshButton, Table} from './styled';
import {COLUMNS, REFETCH_TIME, DEFAULT_SORT} from './constants';

export const NewsPage = () => {
	const {
		data: ids = [],
		isFetching: isFetchingIds,
		refetch
	} = newsApi.useGetNewIdsQuery(undefined, {
		pollingInterval: REFETCH_TIME
	});
	const top100 = useMemo(() => ids.slice(0, CONFIG.newsCount), [ids]);
	const {data: news = [], isFetching} = newsApi.useGetStoriesQuery(top100);
	const navigate = useNavigate();
	const {t} = useTranslation();
	const isLoading = isFetchingIds || isFetching;

	const handleClickRefetchButton = () => {
		if (!isFetchingIds) refetch();
	};

	const handleRowClick = useCallback((row: Story) => {
		navigate(PAGES.newsItem.replace(':id', String(row.id)));
	}, []);

	return (
		<Container maxWidth="lg" sx={{mt: 7}}>
			<Page>
				<Header>
					<Typography variant="h4">Hacker News</Typography>
					<RefreshButton disabled={isLoading} fullWidth={false} onClick={handleClickRefetchButton} variant="contained">
						{t('refresh')}
					</RefreshButton>
				</Header>
				<Table<Story>
					columns={COLUMNS}
					data={news}
					defaultSort={DEFAULT_SORT}
					isLoading={isLoading}
					labelRowsPerPage={t('newsPerPage')}
					onRowClick={handleRowClick}
				/>
			</Page>
		</Container>
	);
};

export default NewsPage;
