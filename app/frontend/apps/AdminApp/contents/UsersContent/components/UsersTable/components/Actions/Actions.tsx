import { Alert, Button, Divider, Intent, Popover, Tooltip } from '@blueprintjs/core'
import { router } from '@inertiajs/react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type TProps = {
  user: Data.User
}

const Actions: FC<TProps> = ({ user }) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-nowrap">
      <Tooltip content={t('tables.users.tooltips.edit')}>
        <Button icon="edit" intent={Intent.WARNING} onClick={() => router.get(`/admin/users/${user.id}/edit`)} />
      </Tooltip>
      <Divider />
      {/* <Tooltip content={t('tables.users.tooltips.delete')}>
                  </Tooltip> */}
      <Popover>
        {/* <Button icon="trash" intent={Intent.DANGER} onClick={() => router.delete(`/admin/users/${user.id}`)} /> */}
        <Button icon="trash" intent={Intent.DANGER} onClick={() => {}} />
      </Popover>
    </div>
  )
}

export { Actions }
