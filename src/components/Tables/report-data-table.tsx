'use client';

import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import { CSSProperties } from 'react';

const getCommonPinningStyles = (column: Column<any>): CSSProperties => {
  // const pinnedIndex = column.getPinnedIndex()
  return {
    // boxShadow: column.columnDef.header === 'Detalhe' ? '6px 0 6px -4px gray inset' : undefined,
    // borderRight: column.id === 'id' ? '2px solid gray' : undefined,
    backgroundColor: column.id === 'id' ? 'white' : 'transparent',
    left: column.id === 'id' ? `${column.getStart('left')}px` : undefined,
    opacity: column.id === 'id' ? 1 : 1,
    position: column.id === 'id' ? 'sticky' : 'relative',
    zIndex: column.id === 'id' ? 1 : 0,
  }
}

const getCommonPinningStylesHeader = (column: Column<any>): CSSProperties => {
  return {
    backgroundColor: column.id === 'id' ? '#EBEBF0' : 'transparent',
    // borderRight: column.id === 'id' ? '2px solid gray' : undefined,
    left: column.id === 'id' ? `${column.getStart('left')}px` : undefined,
    opacity: column.id === 'id' ? 1 : 1,
    position: column.id === 'id' ? 'sticky' : 'relative',
    zIndex: column.id === 'id' ? 1 : 0,
  }
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  page?: 'home' | 'art';
  loading: boolean;
  actualPageSize?: number;
  actualPageIndex?: number;
}

export function ReportDatagetFiTableArt<TData, TValue>({
  columns,
  data,
  loading,
  actualPageSize,
  actualPageIndex,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: actualPageSize,
        pageIndex: actualPageIndex,
      },
    }
  });

  return (
    <div className="relative">
      <div
        className={`relative w-full overflow-auto h-full`}
      >
        <Table id="table-art">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className='bg-[#EBEBF0] lg:bg-white dark:bg-[#20242C52] lg:dark:bg-[#20242C52]' key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      style={{ ...getCommonPinningStylesHeader(header.column) }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className='border-b dark:bg-[#20242C52]'>
            {loading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Carregando...
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={
                    row.getIsSelected() && 'selected'
                  }
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      style={{ ...getCommonPinningStyles(cell.column) }}
                      className={
                        cell.column.id === 'paid'
                          ? 'text-orange-400'
                          : ''
                      }
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
