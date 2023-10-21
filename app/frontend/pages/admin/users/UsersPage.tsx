import { FC } from 'react'
import { AdminLayout as Layout } from 'components/AdminLayout/AdminLayout'
import { Button } from 'components/Button/Button'
import { Link } from '@inertiajs/react'
import { format } from 'date-fns'
import { DATETIME_FORMAT_STRING, DATE_FORMAT_STRING } from 'lib/constants/dates'

type TProps = {
  users: Data.User[]
}

const UsersPage: FC<TProps> = ({ users }) => {
  return (
    <Layout>
      <div className="flex w-full mb-6 justify-end">
        <Link href="/admin/users/new">create new</Link>
      </div>
      <div className="flex w-full flex-col">
        {users.map((user) => (
          <div key={user.id} className="flex w-full">
            <div className="flex flex-1">
              <span className="flex">{user.id}</span>
              <span className="flex flex-1">{`${user.first_name} ${user.last_name}`}</span>
              <span className="flex flex-1">{user.email}</span>
              <span className="flex flex-1">{user.role}</span>
              <span className="flex flex-1">{format(user.created_at * 1000, DATE_FORMAT_STRING)}</span>
              <span className="flex flex-1">{format(user.last_sign_in_at * 1000, DATETIME_FORMAT_STRING)}</span>
            </div>
            <div className="flex">
              <Link href={`/admin/users/${user.id}/edit`}>
                <Button>edit</Button>
              </Link>
              <Link href={`/admin/users/${user.id}`} method="delete">
                <Button>delete</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default UsersPage
