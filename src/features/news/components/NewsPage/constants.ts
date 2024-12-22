import {ColumnDef, ColumnSort} from '@tanstack/react-table';
import i18n from '~/locales';
import {Story} from '~/features/news/store/types';
import {getFormattedDate} from '~/features/news/utils';
import {CONFIG} from '~/constants';

const REFETCH_TIME = CONFIG.refetchNewsInterval * 1000;

const COLUMNS: ColumnDef<Story>[] = [
	{
		accessorKey: 'title',
		header: () => i18n.t('name'),
		enableSorting: false
	},
	{
		accessorKey: 'score',
		header: () => i18n.t('score')
	},
	{
		accessorKey: 'by',
		header: () => i18n.t('author')
	},
	{
		accessorKey: 'kids',
		header: () => i18n.t('comments_count'),
		cell: ({getValue}) => getValue<number[] | undefined>()?.length ?? 0,
		sortingFn: (rowA, rowB) => (rowA.original.kids?.length ?? 0) - (rowB.original.kids?.length ?? 0),
		sortUndefined: false
	},
	{
		accessorKey: 'time',
		header: () => i18n.t('date'),
		cell: ({getValue}) => getFormattedDate(getValue<number>())
	}
];

const DEFAULT_SORT = [
	{
		id: 'time',
		desc: true
	}
] as ColumnSort[];

export {COLUMNS, REFETCH_TIME, DEFAULT_SORT};
