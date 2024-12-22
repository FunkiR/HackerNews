import {Backdrop, CircularProgress, Fab} from '@mui/material';
import {useNavigate, useParams} from 'react-router';
import {newsApi} from '~/features/news/store';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PAGES from '~/constants/pages';
import {useTranslation} from 'react-i18next';
import NewsItem from '~/features/news/components/NewsItem';

export const NewsItemPage = () => {
	const {id} = useParams();
	const {t} = useTranslation();
	const isValidId = Boolean(Number(id));
	const {data, isFetching} = newsApi.useGetStoryQuery(Number(id), {skip: !isValidId});
	const navigate = useNavigate();

	return (
		<>
			<Fab size="small" onClick={() => navigate(PAGES.news)} color="primary" title={t('backToList')}>
				<ArrowBackIcon />
			</Fab>
			<Backdrop open={isFetching}>
				<CircularProgress color="inherit" />
			</Backdrop>
			{data && <NewsItem newsItem={data} />}
		</>
	);
};

export default NewsItemPage;
