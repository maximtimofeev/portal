import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Alert as BlueprintAlert, AlertProps, Intent } from '@blueprintjs/core'
import { useAlertController } from 'admin/controllers/alertsController'
import { Text } from 'components/Text/Text'

const Alert: FC<{}> = () => {
  const { t } = useTranslation()
  const { alert, clearAlert } = useAlertController()

  const alertProps: AlertProps = {
    isOpen: !!alert,
    canEscapeKeyCancel: true,
    canOutsideClickCancel: true,
    cancelButtonText: t('buttons.cancel'),
    intent: alert?.intent ?? Intent.NONE,
    icon: alert?.icon,
    onCancel: () => {
      if (alert?.onCancel) {
        alert.onCancel()
      }

      clearAlert()
    },
  }

  if (alert?.onConfirm) {
    alertProps.confirmButtonText = alert.onConfirm?.buttonText ?? t('buttons.confirm')

    alertProps.onConfirm = () => {
      alert.onConfirm?.callback()
      clearAlert()
    }
  }

  return (
    <BlueprintAlert {...alertProps}>
      <Text variant="paragraph">{alert?.message ?? ''}</Text>
    </BlueprintAlert>
  )
}

export { Alert }
