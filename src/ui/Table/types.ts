import {RowData, ColumnDef, ColumnSort} from '@tanstack/react-table';
export type Row = Record<string, any>;

export type Props<T extends Row = Row> = {
	defaultSort?: ColumnSort[];
	isLoading?: boolean;
	className?: string;
	onRowClick?: (row: T) => unknown;
	data: T[];
	columns: ColumnDef<T>[];
};
