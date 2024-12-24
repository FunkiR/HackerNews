import {styled, Paper, Typography, Box} from '@mui/material';
import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';

export const Page = styled(Paper)`
	padding: ${({theme}) => theme.spacing(2)};
	overflow-x: auto;
	box-sizing: border-box;
`;

export const Title = styled(Typography)`
	display: inline;
	margin-right: ${({theme}) => theme.spacing(1)};
`;

export const Info = styled(Box)`
	display: flex;
	justify-content: space-between;
	padding: ${({theme}) => theme.spacing(1)};
	margin-top: ${({theme}) => theme.spacing(0.5)};
`;

export const TreeView = styled(SimpleTreeView)`
	.MuiTreeItem-group {
		margin-left: 0;
	}
`;

export const CommentsHeader = styled(Box)`
	display: flex;
	align-items: center;
`;
