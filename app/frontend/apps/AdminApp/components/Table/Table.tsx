import React from 'react'
import ctl from '@netlify/classnames-template-literals'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import cn from 'classnames'
import { Text } from 'components/Text/Text'

type TProps<T> = {
  data: T[]
  columns: ColumnDef<T>[]
}

const borderClassName = ctl(`border-0 border-b border-solid border-b-slate-300`)

const Table: <T extends {}>(props: TProps<T>) => React.ReactElement<TProps<T>> = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="flex w-full overflow-x-auto">
      <div className="flex w-full flex-col" style={{ minWidth: '1200px' }}>
        <div className="flex w-full flex-col">
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              className={cn('mb-2 flex h-12 w-full items-center border-t border-t-slate-300 px-3', borderClassName)}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <div className="flex" style={{ flex: header.column.getSize() }} key={header.id}>
                  <Text variant="heading">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col">
          {table.getRowModel().rows.map((row) => (
            <div className={cn('flex h-12 w-full items-center px-3', borderClassName)} key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <div className="flex" style={{ flex: cell.column.getSize() }} key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { Table }
