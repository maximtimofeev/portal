import { FC } from 'react'
import { format } from 'date-fns'
import { DATETIME_FORMAT_STRING, DATE_FORMAT_STRING } from 'lib/constants/dates'
import { Cell, Column, ColumnHeaderCell, RenderMode, SelectionModes, Table2 } from '@blueprintjs/table'
import { USER_FIELDS_LABELS } from 'lib/constants/users'
import { Link, usePage } from '@inertiajs/react'
import { Button } from '@blueprintjs/core'

type TProps = {}
type TUserKey = keyof Data.User

const columnNameRenderer = (key: string) => {
  return <ColumnHeaderCell>{USER_FIELDS_LABELS[key as TUserKey]}</ColumnHeaderCell>
}

const UsersTable: FC<TProps> = ({}) => {
  const page = usePage<{ users: Data.User[] }>()
  const { users } = page.props

  const cellRenderer = (key: TUserKey) => (rowIndex: number) => {
    const user = users[rowIndex]
    switch (key) {
      case 'created_at':
        return <Cell>{`${format(user.created_at * 1000, DATE_FORMAT_STRING)}`}</Cell>
      case 'last_sign_in_at':
        return <Cell>{`${format(user.last_sign_in_at * 1000, DATETIME_FORMAT_STRING)}`}</Cell>
      default:
        return <Cell>{users[rowIndex][key]}</Cell>
    }
  }
  return (
    <Table2
      className="w-full"
      numRows={users?.length}
      enableColumnResizing={false}
      enableRowResizing={false}
      renderMode={RenderMode.BATCH}
      selectionModes={SelectionModes.ROWS_ONLY}
    >
      <Column name="id" cellRenderer={cellRenderer('id')} nameRenderer={columnNameRenderer} />
      <Column name="first_name" cellRenderer={cellRenderer('first_name')} nameRenderer={columnNameRenderer} />
      <Column name="last_name" cellRenderer={cellRenderer('last_name')} nameRenderer={columnNameRenderer} />
      <Column name="email" cellRenderer={cellRenderer('email')} nameRenderer={columnNameRenderer} />
      <Column name="role" cellRenderer={cellRenderer('role')} nameRenderer={columnNameRenderer} />
      <Column name="created_at" cellRenderer={cellRenderer('created_at')} nameRenderer={columnNameRenderer} />
      <Column name="last_sign_in_at" cellRenderer={cellRenderer('last_sign_in_at')} nameRenderer={columnNameRenderer} />
      <Column
        name=""
        cellRenderer={(rowIndex: number) => {
          const user = users[rowIndex]
          return (
            <Cell>
              <Link href={`/admin/users/${user.id}/edit`}>
                <Button icon="edit" />
              </Link>
              <Link href={`/admin/users/${user.id}`} method="delete">
                <Button icon="delete" />
              </Link>
            </Cell>
          )
        }}
      />
    </Table2>
  )
}

export { UsersTable }
