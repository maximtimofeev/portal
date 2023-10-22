import { FC } from 'react'
import { AdminLayout as Layout } from 'components/AdminLayout/AdminLayout'
import { Link } from '@inertiajs/react'
import { UsersTable } from 'components/tables/UsersTable/UsersTable'

type TProps = {
  users: Data.User[]
}

const UsersPage: FC<TProps> = ({}) => {
  return (
    <Layout>
      <div className="flex w-full mb-6 justify-end">
        <Link href="/admin/users/new">create new</Link>
      </div>
      <UsersTable />
    </Layout>
  )
}

export default UsersPage
