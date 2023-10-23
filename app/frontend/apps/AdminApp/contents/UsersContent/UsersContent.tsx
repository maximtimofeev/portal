import { FC } from 'react'
import { Link } from '@inertiajs/react'
import { PageHeader } from 'admin/components/PageHeader/PageHeader'
import { Alert, Button, Intent } from '@blueprintjs/core'
import { UsersTable } from './components/UsersTable/UsersTable'
import { useTranslation } from 'react-i18next'

type TProps = {
  users: Data.User[]
}

const UsersContent: FC<TProps> = ({ users }) => {
  const { t } = useTranslation()
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

      <Alert cancelButtonText={t('buttons.cancel')} confirmButtonText={t('buttons.delete')}></Alert>
    </>
  )
}

export { UsersContent }
