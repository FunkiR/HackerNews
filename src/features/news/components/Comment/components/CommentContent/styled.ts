import {styled, Typography, ButtonBase, Box, IconButton} from '@mui/material';

export const Header = styled(Typography)`
	color: ${({theme}) => theme.palette.grey[400]};
`;

export const Text = styled(Box)`
	*:last-child {
		margin-bottom: 0 !important;
	}
`;

export const AnswerButton = styled(ButtonBase)`
	color: ${({theme}) => theme.palette.primary.main};
`;

export const RefreshCommentsButton = styled(IconButton)`
	margin-left: ${({theme}) => theme.spacing(0.5)};
`;
