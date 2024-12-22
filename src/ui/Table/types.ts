import {ColumnDef, ColumnSort} from '@tanstack/react-table';
export type Row = Record<string, any>;

export type Props<T extends Row = Row> = {
	labelRowsPerPage?: string;
	defaultSort?: ColumnSort[];
	isLoading?: boolean;
	className?: string;
	onRowClick?: (row: T) => unknown;
	data: T[];
	columns: ColumnDef<T>[];
};
