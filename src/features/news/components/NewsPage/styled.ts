import {Paper, styled, Box, Button} from '@mui/material';
import UITable from '~/ui/Table';
import {ComponentSelector} from '@emotion/serialize';

export const Page = styled(Paper)`
	padding: ${({theme}) => theme.spacing(2)};
`;

export const Header = styled(Box)`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

export const RefreshButton = styled(Button)`
	margin-left: auto !important;
`;

export const Table = styled(UITable)`
	margin-top: ${({theme}) => theme.spacing(3)};
` as typeof UITable & ComponentSelector;
