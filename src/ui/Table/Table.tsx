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
import {useTranslation} from 'react-i18next';
import {Props, Row} from './types';
import {TableBox, TableRow, ProgressBox, NoDataCell, TableContainer} from './styled';

export const Table = <T extends Row = Row>({
	className,
	columns,
	data,
	defaultSort,
	isLoading,
	labelRowsPerPage,
	onRowClick
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
		initialState: {
			pagination: {
				pageSize: 25
			}
		},
		state: {
			sorting
		}
	});
	const {pageIndex, pageSize} = table.getState().pagination;

	const perPageOptions = useMemo(() => [10, 25, 50, 100], []);

	const handlePageChange = useCallback((_, page) => table.setPageIndex(page), []);

	const handlePerPageChange = useCallback((e) => {
		const size = e.target.value ? Number(e.target.value) : 10;
		table.setPageSize(size);
	}, []);

	const labelDisplayedRows = useCallback(({count, from, to}) => `${from}-${to} ${t('of')} ${count}`, []);

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
								<TableRow key={row.id} data-testid="dataRow" hover onClick={() => onRowClick?.(row.original)}>
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
				component="div"
				count={table.getFilteredRowModel().rows.length}
				labelDisplayedRows={labelDisplayedRows}
				labelRowsPerPage={labelRowsPerPage ?? t('rowPerPage')}
				onPageChange={handlePageChange}
				onRowsPerPageChange={handlePerPageChange}
				page={pageIndex}
				rowsPerPage={pageSize}
				rowsPerPageOptions={perPageOptions}
			/>
		</TableBox>
	);
};

export default memo(Table) as typeof Table;
