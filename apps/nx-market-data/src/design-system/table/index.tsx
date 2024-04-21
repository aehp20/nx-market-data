import { flexRender } from '@tanstack/react-table';
import type { Table } from '@tanstack/react-table';

import styled from 'styled-components';

type TableProps<T> = {
  table: Table<T>;
};

export function Table<T>(props: TableProps<T>) {
  const { table } = props;

  return (
    <ContainerTable>
      <TableWrapper>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TrHeader key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <ThHeader key={header.id}>
                  {header.isPlaceholder ? null : (
                    <div
                      style={
                        header.column.getCanSort()
                          ? { cursor: 'pointer', userSelect: 'none' }
                          : undefined
                      }
                      onClick={header.column.getToggleSortingHandler()}
                      title={
                        header.column.getCanSort()
                          ? header.column.getNextSortingOrder() === 'asc'
                            ? 'Sort ascending'
                            : header.column.getNextSortingOrder() === 'desc'
                            ? 'Sort descending'
                            : 'Clear sort'
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </ThHeader>
              ))}
            </TrHeader>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <TrBody key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TdBody key={cell.id} isEven={index % 2 === 0}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TdBody>
              ))}
            </TrBody>
          ))}
        </tbody>
      </TableWrapper>
      <div />
    </ContainerTable>
  );
}

const ContainerTable = styled.div`
  display: flex;
  justify-content: center;
`;

const TableWrapper = styled.table`
  margin-bottom: auto;
  margin-top: auto;
  border-width: 1px;
`;

const TrHeader = styled.tr`
  border-bottom-width: 1px;
  color: #1f2937;
  text-transform: uppercase;
`;

const ThHeader = styled.th`
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-right: 0.5rem;
  font-weight: 500;
  text-align: left;
`;

const TrBody = styled.tr`
  border-bottom-width: 1px;
`;

type TdBodyProps = {
  isEven: boolean;
};
const TdBody = styled.td<TdBodyProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${({ isEven }) => (isEven ? '#FFC93C' : '#FFF3D5')};
`;
