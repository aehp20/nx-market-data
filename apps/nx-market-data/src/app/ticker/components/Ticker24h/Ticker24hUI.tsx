import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { splitTextInCamelCase } from '../../../../utils/splitTextInCamelCase';
import { useMemo } from 'react';
import { Table } from '../../../../design-system';

type Property = {
  name: string;
  value: string | number;
};

const columnHelper = createColumnHelper<Property>();

const columns = [
  columnHelper.accessor('name', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('value', {
    cell: (info) => info.getValue(),
  }),
];

type Ticker24hUIProps = {
  data: { [key: string]: string | number };
};

export default function Ticker24hUI(props: Ticker24hUIProps) {
  const { data } = props;

  const dataTable: { name: string; value: string | number }[] = useMemo(
    () => [],
    []
  );
  Object.keys(data).forEach((key) => {
    dataTable.push({
      name: splitTextInCamelCase(key),
      value: data[key],
    });
  });

  const table = useReactTable({
    data: dataTable,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}
