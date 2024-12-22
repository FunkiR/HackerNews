import {memo, useCallback, useMemo, useState} from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import CircularProgress from '@mui/material/CircularProgress';
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	flexRender,
	SortingState
} from '@tanstack/react-table';
import {Props, Row} from './types';
import {useTranslation} from 'react-i18next';
import {TableBox, TableRow, ProgressBox, NoDataCell, TableContainer} from './styled';

export const Table = <T extends Row = Row>({
	data,
	defaultSort,
	className,
	columns,
	onRowClick,
	isLoading
}: Props<T>) => {
	const {t} = useTranslation();
	const [sorting, setSorting] = useState<SortingState>(defaultSort ?? []);
	const table = useReactTable<T>({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		debugTable: process.env.NODE_ENV === 'development',
		onSortingChange: setSorting,
		state: {
			sorting
		}
	});
	const {pageSize, pageIndex} = table.getState().pagination;

	const perPageOptions = useMemo(() => [5, 10, 25, 50, 100], []);

	const handlePageChange = useCallback((_, page) => {
		table.setPageIndex(page);
	}, []);

	const handlePerPageChange = useCallback((e) => {
		const size = e.target.value ? Number(e.target.value) : 10;
		table.setPageSize(size);
	}, []);

	const labelDisplayedRows = useCallback(({from, to, count}) => `${from}-${to} ${t('of')} ${count}`, []);

	return (
		<TableBox className={className}>
			{isLoading && (
				<ProgressBox data-testid="progress">
					<CircularProgress />
				</ProgressBox>
			)}
			<TableContainer sx={{overflowX: 'auto', minHeight: 400}}>
				<MuiTable>
					<TableHead>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableCell key={header.id} colSpan={header.colSpan}>
										<TableSortLabel
											active={header.column.getIsSorted() !== false}
											direction={header.column.getIsSorted() === 'desc' ? 'desc' : 'asc'}
											onClick={() => header.column.toggleSorting()}
										>
											{flexRender(header.column.columnDef.header, header.getContext())}
										</TableSortLabel>
									</TableCell>
								))}
							</TableRow>
						))}
					</TableHead>
					<TableBody>
						{table.getRowModel().rows.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow data-testid="dataRow" key={row.id} onClick={() => onRowClick?.(row.original)} hover>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : !isLoading ? (
							<TableRow data-testid="noData">
								<NoDataCell colSpan={columns.length}>{t('noData')}</NoDataCell>
							</TableRow>
						) : null}
					</TableBody>
				</MuiTable>
			</TableContainer>
			<TablePagination
				labelRowsPerPage={t('rowPerPage')}
				labelDisplayedRows={labelDisplayedRows}
				rowsPerPageOptions={perPageOptions}
				component="div"
				count={table.getFilteredRowModel().rows.length}
				rowsPerPage={pageSize}
				page={pageIndex}
				onPageChange={handlePageChange}
				onRowsPerPageChange={handlePerPageChange}
			/>
		</TableBox>
	);
};

export default memo(Table) as typeof Table;
