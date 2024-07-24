'use client';

import {
  Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from '../../../ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../ui/table';
// import {
//   ELLIPSIS_LEFT,
//   ELLIPSIS_RIGHT,
//   usePagination,
// } from '@/hooks/usePagination';
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
  setActualPageSize?: any;
  setActualPageIndex?: any;
}

export function DatagetFiTableArt<TData, TValue>({
  columns,
  data,
  loading,
  setActualPageSize,
  setActualPageIndex
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    }
  });

  const canPreviosPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  // const { pages, isCurrentPage } = usePagination({
  //   page: table.getState()?.pagination?.pageIndex + 1,
  //   limit: 5,
  //   total: data.length,
  // });

  return (
    <div className="relative">
      <div
        className={`relative w-full overflow-auto h-full`}
      >
        <Table id="table-art">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className='dark:bg-[#20242C52] lg:dark:bg-[#20242C52]' key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="border-t"
                      key={header.id}
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
      {data.length > 0 ? (
        <div className="flex flex-col gap-3 px-6 pb-7 pt-4 w-full bg-[#f1f5f9] dark:bg-[#20242C52] xl:flex-row">
          <div className="flex items-center gap-4">
            <label className="text-font-size-base/R text-global-gray-70">
              Exibir:{' '}
            </label>
            <select
              className="border border-global-gray-30 px-3 py-2 text-brand-50 text-font-size-base/M rounded"
              value={table.getState()?.pagination?.pageSize ?? 5}
              onChange={(e) => {
                table.setPageSize(Number(e.target.value))
                setActualPageSize(Number(e.target.value))
              }}
            >
              {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <p className="min-w-36 text-font-size-base/R text-global-gray-70">
              de{' '}
              <span className="text-[#004f99]">
                <b>{data.length.toLocaleString()}</b>
              </span>{' '}
              resultados
            </p>
          </div>

          {/* <Pagination className="text-global-gray-70">
            <PaginationContent>
              <PaginationItem className={`text-[#00509B] ${canPreviosPage ? "" : "cursor-not-allowed text-gray-600"}`}>
                <PaginationPrevious
                  href="#"
                  onClick={() => canPreviosPage ? table.previousPage() : null}
                />
              </PaginationItem>

              {pages.map((page: any) => {
                const isEllipsis =
                  page === ELLIPSIS_LEFT ||
                  page === ELLIPSIS_RIGHT;

                if (isEllipsis) {
                  return (
                    <PaginationItem
                      key={page}
                      className={
                        isCurrentPage(page)
                          ? 'bg-[#00509B] text-white rounded'
                          : ''
                      }
                    >
                      <span>...</span>
                    </PaginationItem>
                  );
                }

                return (
                  <PaginationItem
                    key={page}
                    className={
                      isCurrentPage(page)
                        ? 'bg-[#00509B] text-white rounded'
                        : ''
                    }
                  >
                    <PaginationLink
                      onClick={() => {
                        if (!isCurrentPage(page)) {
                          const pageIndex = page - 1;
                          table.setPageIndex(pageIndex);
                          setActualPageIndex(pageIndex)
                        }
                      }}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              {canNextPage && (
                <PaginationItem className="text-[#00509B]">
                  <PaginationNext
                    onClick={() => {
                      table.nextPage()
                    }}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination> */}
        </div>
      ) : null}
    </div>
  );
}
