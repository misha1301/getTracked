import React from 'react';
import {
  type Table as TanstackTable,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  createColumnHelper,
} from '@tanstack/react-table';
import { Outlet } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils.ts';
import {
  ContentBoard,
  BoardHeader,
  BoardContent,
  LogicBox,
  LogicBoxLabel,
  LogicBlock,
  ContentGroup,
} from '@/components/ui/content-board.tsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { TextAreaBadge } from '@/components/ui/badge.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface DataTableProps<TData> extends React.ComponentProps<'div'> {
  table: TanstackTable<TData>;
  actionBar?: React.ReactNode;
}

const RunnerPageLayout: React.FC = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export function DataTable<TData>({
  table,
  actionBar,
  children,
  className,
  ...props
}: DataTableProps<TData>) {
  return (
    <div className={cn('flex w-full flex-col overflow-auto', className)} {...props}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((rowModel) => (
              <TableRow key={rowModel.id} data-state={rowModel.getIsSelected() && 'selected'}>
                {rowModel.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={table.getAllColumns().length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const payments: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: '489e1d42',
    amount: 125,
    status: 'processing',
    email: 'example@gmail.com',
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
];

export const RunnerList = () => {
  return (
    <ContentBoard>
      <BoardHeader>Runner setting</BoardHeader>
      <BoardContent>
        <LogicBox>
          <LogicBoxLabel>
            <span>Description</span>
          </LogicBoxLabel>
          <LogicBlock>
            <Input
              type='text'
              placeholder='description'
              className='rounded-[11px] text-[14px] px-[10px]'
            />
          </LogicBlock>
        </LogicBox>
        <ContentGroup>
          <LogicBox>
            <LogicBoxLabel>
              <span>Email</span>
            </LogicBoxLabel>
            <LogicBlock aria-invalid className='group'>
              <Input
                type='url'
                placeholder='https://<your-site>'
                className='rounded-[11px] text-[14px] px-[10px] field-sizing-content'
              />
            </LogicBlock>
          </LogicBox>
          <LogicBox>
            <LogicBoxLabel>
              <p>Rule</p>
            </LogicBoxLabel>
            <LogicBlock className="min-w-0">
              <TextAreaBadge>JSON</TextAreaBadge>
              <Textarea
                className='resize-none field-sizing-content rounded-[11px] text-[14px] px-[10px] whitespace-pre'
                cols={8}
                rows={2}
                placeholder='select: div \n children: a'
              />
            </LogicBlock>
          </LogicBox>
          <LogicBox>
            <LogicBoxLabel>Use location</LogicBoxLabel>
            <LogicBlock>
              <Input
                type='text'
                disabled
                placeholder='https://<your-site>'
                className='rounded-[11px] text-[14px] px-[10px]'
              />
            </LogicBlock>
          </LogicBox>
          <LogicBox>
            <LogicBoxLabel>Rule</LogicBoxLabel>
            <LogicBlock>
              <Select>
                <SelectTrigger className='w-full rounded-[11px]'>
                  <SelectValue placeholder='Select a fruit' />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value='apple'>Apple</SelectItem>
                    <SelectItem value='banana'>Banana</SelectItem>
                    <SelectItem value='blueberry'>Blueberry</SelectItem>
                    <SelectItem value='grapes'>Grapes</SelectItem>
                    <SelectItem value='pineapple'>Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </LogicBlock>
          </LogicBox>
        </ContentGroup>
      </BoardContent>
    </ContentBoard>
  );
};

export default RunnerPageLayout;
