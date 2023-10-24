import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Intent } from '@blueprintjs/core'
import { Link, usePage } from '@inertiajs/react'
import { PageHeader } from 'admin/components/PageHeader/PageHeader'
import { AdminPageBaseProps } from 'types'

import { UsersTable } from './components/UsersTable/UsersTable'

type TPageProps = {
  users: Data.User[]
} & AdminPageBaseProps

const UsersContent: FC<{}> = () => {
  const {
    props: { users },
  } = usePage<TPageProps>()
  const { t } = useTranslation()

  return (
    <>
      <PageHeader>
        <Link href="/admin/users/new">
          <Button intent={Intent.SUCCESS} large>
            {t('buttons.create')}
          </Button>
        </Link>
      </PageHeader>
      <div className="flex flex-1 flex-col justify-start bg-slate-100">
        <UsersTable data={users} />
      </div>
    </>
  )
}

export { UsersContent }
