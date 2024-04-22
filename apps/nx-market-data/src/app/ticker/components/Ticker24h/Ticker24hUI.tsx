import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';
import { splitTextInCamelCase } from '../../../../utils/splitTextInCamelCase';
import { Table } from '../../../../design-system';
import { useI18NContext } from '../../../../i18n';

type Property = {
  name: string;
  value: string | number;
};

const columnHelper = createColumnHelper<Property>();

type Ticker24hUIProps = {
  data: { [key: string]: string | number };
};

export default function Ticker24hUI(props: Ticker24hUIProps) {
  const { data } = props;

  const { _ } = useI18NContext();

  const columns = [
    columnHelper.accessor('name', {
      header: () => _('Name'),
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('value', {
      header: () => _('Value'),
      cell: (info) => info.getValue(),
    }),
  ];

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
