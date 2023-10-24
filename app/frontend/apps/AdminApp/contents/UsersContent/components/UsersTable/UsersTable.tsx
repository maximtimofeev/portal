import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { ColumnDef } from '@tanstack/react-table'
import { Table } from 'admin/components/Table/Table'
import { Text } from 'components/Text/Text'
import { format } from 'date-fns'
import { DATE_FORMAT_STRING, DATETIME_FORMAT_STRING } from 'lib/constants/dates'
import { TABLE_SETTINGS, TableType } from 'lib/constants/tables'

import { Actions } from './components/Actions/Actions'

type TProps = {
  data: Data.User[]
}

const UsersTable: FC<TProps> = ({ data }) => {
  const { t } = useTranslation()

  const columns = useMemo<ColumnDef<Data.User>[]>(
    () =>
      TABLE_SETTINGS[TableType.USERS].map((item) => {
        const column: ColumnDef<Data.User> = {
          header: t(`data.user.fields.${item.id}`),
          accessorKey: item.id,
          size: item.width,
        }

        switch (item.id) {
          case 'created_at':
            column.cell = (info) => {
              const value = +`${info.getValue()}`

              return <div>{value ? format(value * 1000, DATE_FORMAT_STRING) : ''}</div>
            }
            break
          case 'last_sign_in_at':
            column.cell = (info) => {
              const value = info.getValue() as number

              return <div>{value ? format(value * 1000, DATETIME_FORMAT_STRING) : ''}</div>
            }
            break
          case 'buttons':
            column.cell = ({ row: { index } }) => {
              return <Actions user={data[index]} />
            }
            break
          default:
            column.cell = (info) => <Text>{`${info.getValue()}`}</Text>
            break
        }

        return column
      }),
    [data, t],
  )

  return <Table<Data.User> data={data} columns={columns} />
}

export { UsersTable }
