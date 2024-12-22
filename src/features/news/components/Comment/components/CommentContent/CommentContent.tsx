import parse from 'html-react-parser';
import {Props} from './types';
import {memo, MouseEvent} from 'react';
import {Box, CircularProgress} from '@mui/material';
import {Header, AnswerButton, Text, RefreshCommentsButton} from './styled';
import {getFormattedDate} from '~/features/news/utils';
import {useTranslation} from 'react-i18next';
import RefreshIcon from '@mui/icons-material/Refresh';

export const CommentContent = ({
	comment,
	className,
	onClick,
	onLoad,
	onMouseDown,
	isLoading,
	isLoaded,
	onClickRefresh
}: Props) => {
	const {t} = useTranslation();
	const {text, time, by, kids} = comment;
	const answersCount = kids?.length ?? 0;

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		if (!isLoaded) onLoad();

		onClick(e);
	};

	return (
		<Box className={className} mt={1}>
			<Header>{`${by ?? t('anonymous')} (${getFormattedDate(time)})`}</Header>
			{text && <Text mt={0.5}>{parse(text)}</Text>}
			<Box mt={0.5} display="flex" alignItems="center" height={30}>
				<AnswerButton
					data-testid="answerButton"
					onMouseDown={onMouseDown}
					onClick={handleClick}
				>{`${answersCount} ${t('answer', {count: answersCount})}`}</AnswerButton>
				{isLoading && <CircularProgress sx={{ml: 1}} size={10} />}
				{isLoaded && !isLoading && (
					<RefreshCommentsButton
						data-testid="refreshButton"
						color="primary"
						onClick={onClickRefresh}
						disabled={isLoading}
					>
						<RefreshIcon />
					</RefreshCommentsButton>
				)}
			</Box>
		</Box>
	);
};

export default memo(CommentContent);
