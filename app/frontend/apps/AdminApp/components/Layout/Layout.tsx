import { FC, PropsWithChildren, useEffect } from 'react'
import { Intent } from '@blueprintjs/core'
import { usePage } from '@inertiajs/react'
import { Toaster } from 'components/Toaster/Toaster'
import { AdminPageBaseProps } from 'types'

import { Alert } from './components/Alert/Alert'
import { Aside } from './components/Aside/Aside'
import { Header } from './components/Header/Header'

type TProps = {} & PropsWithChildren

const Layout: FC<TProps> = ({ children }) => {
  const {
    props: { flash, has_flash },
  } = usePage<AdminPageBaseProps>()

  useEffect(() => {
    if (has_flash) {
      Toaster.show({ message: flash.notice, intent: Intent.NONE, timeout: 3000 })
    }
  }, [flash, has_flash])

  return (
    <div className="flex min-h-full w-full">
      <Aside />
      <div className="ml-60 flex min-h-full flex-1 flex-col">
        <Header />
        <main className="mt-12 flex flex-1 flex-col bg-sky-100">{children}</main>
      </div>
      <Alert />
    </div>
  )
}

export { Layout }
