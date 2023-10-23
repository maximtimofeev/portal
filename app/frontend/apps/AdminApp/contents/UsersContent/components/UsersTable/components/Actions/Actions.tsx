import { Button, Divider, Intent, Tooltip } from '@blueprintjs/core'
import { IconNames } from '@blueprintjs/icons'
import { router } from '@inertiajs/react'
import { useAlertController } from 'admin/controllers/alertsController'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

type TProps = {
  user: Data.User
}

const Actions: FC<TProps> = ({ user }) => {
  const { t } = useTranslation()
  const controller = useAlertController()
  return (
    <div className="flex flex-nowrap">
      <Tooltip content={t('tables.users.tooltips.edit')}>
        <Button icon="edit" intent={Intent.WARNING} onClick={() => router.get(`/admin/users/${user.id}/edit`)} />
      </Tooltip>
      <Divider />
      <Tooltip content={t('tables.users.tooltips.delete')}>
        <Button
          icon={IconNames.Trash}
          intent={Intent.DANGER}
          onClick={() =>
            controller.setAlert({
              message: `Are you sure you want to move filename to Trash? You will be able to restore it later`,
              icon: IconNames.Trash,
              intent: Intent.DANGER,
              onConfirm: {
                buttonText: t('buttons.delete'),
                callback: () => router.delete(`/admin/users/${user.id}`),
              },
            })
          }
        />
      </Tooltip>
    </div>
  )
}

export { Actions }
