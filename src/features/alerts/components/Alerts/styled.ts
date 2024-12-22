import {Stack, styled} from '@mui/material';

export const Container = styled(Stack)`
	position: fixed;
	right: 0;
	top: 0;
	z-index: 9999;
	width: 400px;
	margin: ${(props) => `${props.theme.spacing(1)}`};
`;
