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

const columns = [
  columnHelper.accessor('time', {
    header: () => 'Time',
    cell: (info) => formatDate(info.getValue()),
    sortingFn: 'datetime',
  }),
  columnHelper.accessor('price', {
    header: () => 'Price',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('qty', {
    header: () => 'Quantity',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('quoteQty', {
    header: () => 'Quote Qty',
    cell: (info) => info.getValue(),
  }),
];

type TickerRecentTradesUIProps = {
  data: RecentTrade[];
};

export default function TickerRecentTradesUI(props: TickerRecentTradesUIProps) {
  const { data: dataTable } = props;

  const [sorting, setSorting] = useState<SortingState>([]);

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
      <Message>To sort each column, simply click on the header.</Message>
      <Table table={table} />;
    </>
  );
}
