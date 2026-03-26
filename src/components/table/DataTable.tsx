import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import {
  type Table as TanstackTable,
  flexRender,
} from '@tanstack/react-table';

import { ScrollAreaFlex, ScrollBar } from '@/components/ui/scroll-area';
import { Corner } from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils.ts';

interface DataTableProps<TData> extends React.ComponentProps<'div'> {
  table: TanstackTable<TData>;
  actionBar?: React.ReactNode;
}

export function DataTable<TData>({
  table,
  actionBar,
  children,
  className,
  ...props
}: DataTableProps<TData>) {

  return (
    <section className={cn('flex w-full flex-col pb-0 transition-[padding] duration-300 [&:has([data-slot="scroll-area-scrollbar"])]:pb-[15px] overflow-hidden [--data-table-head-height:40px] [--data-table-padding:5px] [--data-table-header-px:13px] [--data-table-body-rounded:13px] [--data-table-bg:#1e1e1e] [--data-table-cell-bg:#181818]', className)} {...props}>
      <ScrollAreaFlex
        className={cn(
          'relative  w-full scroll-smooth bg-(--data-table-bg) whitespace-nowrap transition-[border-radius] duration-300 rounded-b-[16px] [&:has([data-slot="scroll-area-scrollbar"])]:rounded-b-[0px]'
        )}
        type="auto"
        viewportClassName='pb-[5px] px-[5px]'
      >
        <Table className='[&:has(thead_tr:hover)]:bg-muted/50 rounded-(--data-table-body-rounded)'>
          <TableHeader className='[&_tr]:border-0 bg-(--data-table-bg)'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className='[&_th:first-child]:rounded-tl-(--data-table-body-rounded) [&_th:last-child]:rounded-tr-(--data-table-body-rounded)'>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} colSpan={header.colSpan} className='font-[montserrat] font-normal text-(--gtr-color-muted-foreground)'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className=' relative after:content-[""] after:absolute after:inset-0 after:rounded-(--data-table-body-rounded) after:shadow-[0px_0px_5px_1px_rgba(47,47,47,0.35)]
                                after:pointer-events-none [&_tr:last-child_td:first-child]:rounded-bl-(--data-table-body-rounded) [&_tr:last-child_td:last-child]:rounded-br-(--data-table-body-rounded) [&_tr:first-child_td:first-child]:rounded-tl-(--data-table-body-rounded) [&_tr:first-child_td:last-child]:rounded-tr-(--data-table-body-rounded)'>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((rowModel) => (
                <TableRow key={rowModel.id} data-state={rowModel.getIsSelected() && 'selected'} className='bg-(--data-table-cell-bg)'>
                  {rowModel.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className=''>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={table.getAllColumns().length} className='h-24 text-center'>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Corner></Corner>
        <ScrollBar orientation='horizontal' style={{ bottom: "-9px", left:"8px", right:"8px", background: "#181818" }} className='h-[8px]'>
        </ScrollBar>
      </ScrollAreaFlex>
    </section>
  );
}
