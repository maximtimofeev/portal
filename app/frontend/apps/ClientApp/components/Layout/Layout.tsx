import { FC, PropsWithChildren } from 'react'
import { usePage } from '@inertiajs/react'
import { TSeoProps } from 'types'

import { AppHead } from './components/AppHead/AppHead'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

type TProps = {} & PropsWithChildren

const Layout: FC<TProps> = ({ children }) => {
  const {
    props: { seo },
  } = usePage<{ seo: TSeoProps }>()

  return (
    <div className="flex min-h-full w-full flex-col">
      <AppHead seo={seo} />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }
