import { FC } from 'react'
import { Link } from '@inertiajs/react'
import { UsersTable } from 'components/tables/UsersTable/UsersTable'
import { Layout } from 'apps/AdminApp/components/Layout/Layout'

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
