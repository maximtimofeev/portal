import { FC } from 'react'
import { Link } from '@inertiajs/react'
import { UsersTable } from 'admin/components/tables/UsersTable/UsersTable'
import { PageHeader } from 'admin/components/PageHeader/PageHeader'
import { Button, Intent } from '@blueprintjs/core'

type TProps = {
  users: Data.User[]
}

const UsersPage: FC<TProps> = ({ users }) => {
  return (
    <>
      <PageHeader>
        <Link href="/admin/users/new">
          <Button intent={Intent.SUCCESS} large>
            Create new
          </Button>
        </Link>
      </PageHeader>
      <UsersTable data={users} />
    </>
  )
}

export default UsersPage
