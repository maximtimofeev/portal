import { AlertProps } from '@blueprintjs/core'
import { create } from 'zustand'

type TAlert = {
  message: string
  onCancel?: () => void
  onConfirm?: {
    buttonText: string
    callback: () => void
  }
} & Pick<AlertProps, 'icon' | 'intent'>

interface IAlertState {
  alert: TAlert | null
  setAlert: (alert: TAlert) => void
  clearAlert: () => void
}

const useAlertController = create<IAlertState>()((set) => ({
  alert: null,
  setAlert: (alert) => set(() => ({ alert })),
  clearAlert: () => set(() => ({ alert: null })),
}))

export { useAlertController }
