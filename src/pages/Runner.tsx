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

import { Check, ChevronsUpDown } from "lucide-react";

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
  ContentFrame,
  ContentBoard,
  BoardHeader,
  HeaderIcon,
  BoardContent,
  LogicBox,
  LogicBoxLabel,
  LogicBlock,
  ContentGroup,
  ErrorLabel,
  BoardFooter, ContentSection,
  SectionTitle,
  SectionUtils,
} from '@/components/ui/content-board.tsx';
import { InfoBlock, InfoRow, RowBadgeContainer } from '@/components/ui/info-block.tsx';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge.tsx';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { InputCustom } from '@/components/inputs/input.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Switch } from '@/components/ui/switch';
import { StatusIndicator, IndicatorStatus } from '@/components/ui/statusIndicator.tsx';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tracker } from '@/db/schema';
import { tableTrackersDataSet } from '@/db/dataSample';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

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
    <section className={cn('flex w-full flex-col overflow-hidden [--data-table-head-height:40px] [--data-table-padding:5px] [--data-table-header-px:13px] [--data-table-body-rounded:13px] [--data-table-bg:#1e1e1e] [--data-table-cell-bg:#181818]', className)} {...props}>
      <div className="relative before:absolute before:left-0 before:top-0 before:z-1 before:h-(--data-table-head-height) before:w-(--data-table-header-px) before:bg-linear-to-r before:from-(--data-table-bg) before:to-transparent after:absolute after:right-0 after:top-0 after:z-1 after:h-(--data-table-head-height) after:w-(--data-table-header-px) after:bg-linear-to-l after:from-(--data-table-bg) after:to-transparent">
        <div className="after:absolute after:inset-0 after:top-(--data-table-head-height) after:bg-(--data-table-cell-bg) after:left-[calc(var(--data-table-padding)*1)] after:right-[calc(var(--data-table-padding)*1)] after:z-[-1] after:rounded-(--data-table-body-rounded)">
          <div className='overflow-hidden rounded-(--data-table-body-rounded) before:pointer-events-none before:absolute before:inset-0 before:top-(--data-table-head-height) before:left-[calc(var(--data-table-padding)*1)]  before:right-[calc(var(--data-table-padding)*1)] before:z-1 before:rounded-(--data-table-body-rounded) before:ring-[calc(var(--data-table-padding)+5px)] before:ring-(--data-table-bg) after:pointer-events-none after:absolute after:inset-0 after:top-(--data-table-head-height) after:left-[calc(var(--data-table-padding)*1)] after:right-[calc(var(--data-table-padding)*1)] after:z-2 after:rounded-(--data-table-body-rounded) after:bg-clip-padding after:shadow-[0px_0px_5px_1px_rgba(47,_47,_47,_0.25)]'>

            <Table className='z-2'>
              <TableHeader className='[&_tr]:border-0 bg-(--data-table-bg)'>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
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
              <TableBody className='relative border-(--data-table-bg)  rounded-(--data-table-body-rounded)'>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((rowModel) => (
                    <TableRow key={rowModel.id} data-state={rowModel.getIsSelected() && 'selected'} className=''>
                      {rowModel.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} >
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
          </div>
        </div>
      </div>
    </section>
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

const columnHelper = createColumnHelper<Tracker>();

export const columns = [
  columnHelper.accessor("title", {
    header: "Tracker",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status.name", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("webUrl", {
    header: "Web URL",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("resultSetNumber", {
    header: "Result set",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("lastUpdateDate", {
    header: "Last update",
    cell: (info) => info.getValue(),
  }),
];

export const RunnerList = () => {

  const [data, _setData] = React.useState(() => tableTrackersDataSet)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <ContentFrame maxFrameWidth='1200px'>
      <ContentSection>
        <SectionUtils>
          <Button variant='link' size='none' className='text-(--gtr-color-warning-foreground)'>
            Edit tracker
          </Button>
        </SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardHeader className='px-[2px_10px]'>
          <HeaderIcon>
            <StatusIndicator type={IndicatorStatus.Active} />
          </HeaderIcon>
          <h3 className='text-[17px] font-semibold'>Runner setting</h3>
        </BoardHeader>
        <BoardContent>
          <LogicBox className='group'>
            <LogicBlock>
              <InputCustom type='text' placeholder='description' />
            </LogicBlock>
          </LogicBox>
          <ContentGroup>
            <LogicBox aria-invalid='false' className='group'>
              <LogicBoxLabel>
                <span>Web URL</span>
              </LogicBoxLabel>
              <LogicBlock>
                <InputCustom type='url' placeholder='https://<your-site>' />
              </LogicBlock>
              <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
            </LogicBox>
            {/*<LogicBox>*/}
            {/*  <LogicBoxLabel>*/}
            {/*    <p>Rule</p>*/}
            {/*  </LogicBoxLabel>*/}
            {/*  <LogicBlock className='min-w-0'>*/}
            {/*    /!*<TextAreaBadge>JSON</TextAreaBadge>*!/*/}
            {/*    <Textarea*/}
            {/*      className=' field-sizing-content rounded-[11px] text-[14px] px-[10px] whitespace-pre'*/}
            {/*      cols={8}*/}
            {/*      rows={2}*/}
            {/*      placeholder='select: div \n children: a'*/}
            {/*    />*/}
            {/*  </LogicBlock>*/}
            {/*</LogicBox>*/}
            <LogicBox aria-invalid='false' className='group'>
              <LogicBoxLabel>
                <span>Is paginable</span>
              </LogicBoxLabel>
              <LogicBlock className='bg-(--gtr-color-primary-foreground)'>
                <Switch className='mx-[10px]' />
              </LogicBlock>
              <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
            </LogicBox>
            <LogicBox aria-invalid='false' className='group'>
              <LogicBoxLabel>
                <span>Pagination selection key</span>
              </LogicBoxLabel>
              <LogicBlock>
                <InputCustom disabled type='url' placeholder='https://<your-site>' />
              </LogicBlock>
              <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
            </LogicBox>
            <LogicBox aria-invalid='false' className='group'>
              <LogicBoxLabel>
                <span>Page numbers</span>
              </LogicBoxLabel>
              <LogicBlock>
                <InputCustom disabled type='url' placeholder='https://<your-site>' />
              </LogicBlock>
              <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
            </LogicBox>
            <LogicBox>
              <LogicBoxLabel>Status</LogicBoxLabel>
              <LogicBlock>
                <Select defaultValue='inactive'>
                  <SelectTrigger className='w-full rounded-[11px]'>
                    <SelectValue placeholder='Runner status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Runner status</SelectLabel>
                      <SelectItem value='active'>Active</SelectItem>
                      <SelectItem value='inactive'>Inactive</SelectItem>
                      <SelectItem value='failed'>Failed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </LogicBlock>
            </LogicBox>
            <LogicBox aria-invalid='false' className='group'>
              <LogicBoxLabel>
                <span>Last error message</span>
              </LogicBoxLabel>
              <LogicBlock>
                <InputCustom type='url' placeholder='null' />
              </LogicBlock>
              <ErrorLabel>Недопустиме значення електронної адреси!</ErrorLabel>
            </LogicBox>
            <LogicBox>
              <LogicBoxLabel>Filter rule</LogicBoxLabel>
              <LogicBlock>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      role='combobox'
                      aria-expanded={open}
                      className='w-full justify-between'
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : 'Select framework...'}
                      <ChevronsUpDown className='opacity-50' />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='w-[var(--radix-popper-anchor-width)] p-0 rounded-[11px]'>
                    <Command className=''>
                      <CommandInput placeholder='Search framework...' className='h-9' />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {frameworks.map((framework) => (
                            <CommandItem
                              key={framework.value}
                              value={framework.value}
                              onSelect={(currentValue) => {
                                setValue(currentValue === value ? '' : currentValue);
                                setOpen(false);
                              }}
                            >
                              {framework.label}
                              <Check
                                className={cn(
                                  'ml-auto',
                                  value === framework.value ? 'opacity-100' : 'opacity-0',
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </LogicBlock>
            </LogicBox>
          </ContentGroup>
        </BoardContent>
        <BoardFooter>Last updated / 13.11.2024</BoardFooter>
      </ContentBoard>

      <ContentSection>
        <SectionTitle>
          <h3 className='text-[17px] font-semibold'>Last tracking result set</h3>{' '}
        </SectionTitle>
        <SectionUtils></SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardContent>
          <LogicBox>
            <LogicBoxLabel muted className='mt-[8px]'>Total number</LogicBoxLabel>
            <InfoBlock>
              <InfoRow>
                gege
                <RowBadgeContainer>
                  <Badge
                    className='h-5 min-w-5 rounded-full px-1 font-mono tabular-nums'
                    variant='destructive'
                  >
                    deleted
                  </Badge>
                </RowBadgeContainer>
              </InfoRow>
              <InfoRow>gege</InfoRow>
              <InfoRow>gege</InfoRow>
            </InfoBlock>
          </LogicBox>
        </BoardContent>
      </ContentBoard>

      <ContentSection>
        <SectionTitle>
          <h3 className='text-[17px] font-semibold'>Trackers list</h3>{' '}
        </SectionTitle>
        <SectionUtils></SectionUtils>
      </ContentSection>

      <ContentBoard>
        <BoardContent>
          <LogicBox>
            <LogicBoxLabel muted className='mt-[8px]'>Trackers view</LogicBoxLabel>
            <DataTable table={table} />

          </LogicBox>
        </BoardContent>
      </ContentBoard>
    </ContentFrame>
  );
};


export default RunnerPageLayout;