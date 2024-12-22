import {styled, Paper, Box} from '@mui/material';
import Row from '@mui/material/TableRow';
import Cell from '@mui/material/TableCell';
import Container from '@mui/material/TableContainer';

export const TableBox = styled(Paper)`
	width: 100%;
	position: relative;
	overflow: 'hidden';
`;

export const TableContainer = styled(Container)`
	overflow-x: auto;
	min-height: 400px;
`;

export const ProgressBox = styled(Box)`
	align-items: center;
	justify-content: center;
	background-color: black;
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	opacity: 0.5;
	pointer-events: none;
	z-index: 1;
`;

export const TableRow = styled(Row)`
	cursor: pointer;
`;

export const NoDataCell = styled(Cell)`
	line-height: 200px;
	text-align: center;
`;
