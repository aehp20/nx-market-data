import { useState } from 'react';
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';

import { formatDate } from '../../../../utils/formatDate';
import { Table, Message } from '../../../../design-system';
import { useI18NContext } from '../../../../i18n';

type RecentTrade = {
  id: number;
  isBestMatch: boolean;
  isBuyerMaker: boolean;
  price: string;
  qty: string;
  quoteQty: string;
  time: number;
};

const columnHelper = createColumnHelper<RecentTrade>();

type TickerRecentTradesUIProps = {
  data: RecentTrade[];
};

export default function TickerRecentTradesUI(props: TickerRecentTradesUIProps) {
  const { data: dataTable } = props;

  const { _ } = useI18NContext();

  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = [
    columnHelper.accessor('time', {
      header: () => _('Time'),
      cell: (info) => formatDate(info.getValue()),
      sortingFn: 'datetime',
    }),
    columnHelper.accessor('price', {
      header: () => _('Price'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('qty', {
      header: () => _('Quantity'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('quoteQty', {
      header: () => _('Quote Qty'),
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: dataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  });

  return (
    <>
      <Message>{_('To sort each column, simply click on the header.')}</Message>
      <Table table={table} />;
    </>
  );
}
