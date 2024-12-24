import parse from 'html-react-parser';
import {memo, MouseEvent} from 'react';
import {Box, CircularProgress} from '@mui/material';
import {getFormattedDate} from '~/features/news/utils';
import {useTranslation} from 'react-i18next';
import RefreshIcon from '@mui/icons-material/Refresh';
import {Header, AnswerButton, Text, RefreshCommentsButton} from './styled';
import {Props} from './types';

export const CommentContent = ({
	className,
	comment,
	isLoaded,
	isLoading,
	onClick,
	onClickRefresh,
	onLoad,
	onMouseDown
}: Props) => {
	const {t} = useTranslation();
	const {by, kids, text, time} = comment;
	const answersCount = kids?.length ?? 0;

	const handleClick = (e: MouseEvent<HTMLElement>) => {
		if (!isLoaded) onLoad();

		onClick(e);
	};

	return (
		<Box className={className} mt={1}>
			<Header>{`${by ?? t('anonymous')} (${getFormattedDate(time)})`}</Header>
			{text && <Text mt={0.5}>{parse(text)}</Text>}
			<Box alignItems="center" display="flex" height={30} mt={0.5}>
				<AnswerButton
					data-testid="answerButton"
					onClick={handleClick}
					onMouseDown={onMouseDown}
				>{`${answersCount} ${t('answer', {count: answersCount})}`}</AnswerButton>
				{isLoading && <CircularProgress size={10} sx={{ml: 1}} />}
				{isLoaded && !isLoading && (
					<RefreshCommentsButton
						color="primary"
						data-testid="refreshButton"
						disabled={isLoading}
						onClick={onClickRefresh}
					>
						<RefreshIcon />
					</RefreshCommentsButton>
				)}
			</Box>
		</Box>
	);
};

export default memo(CommentContent);
