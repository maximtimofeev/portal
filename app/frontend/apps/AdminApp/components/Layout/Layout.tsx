import { FC, PropsWithChildren, useEffect } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Aside } from './components/Aside/Aside'
import { AdminPageBaseProps } from 'types'
import { usePage } from '@inertiajs/react'
import { Toaster } from 'components/Toaster/Toaster'
import { Intent } from '@blueprintjs/core'

type TProps = {} & PropsWithChildren

const Layout: FC<TProps> = ({ children }) => {
  const {
    props: { flash, has_flash },
  } = usePage<AdminPageBaseProps>()

  useEffect(() => {
    if (has_flash) {
      Toaster.show({ message: flash.notice, intent: Intent.NONE, timeout: 3000, className: 'left-30' })
    }
  }, [flash, has_flash])
  return (
    <div className="flex w-full min-h-full">
      <Aside />
      <div className="flex flex-1 min-h-full flex-col ml-60">
        <Header />
        <main className="flex flex-col flex-1 mt-12 bg-sky-100">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export { Layout }
