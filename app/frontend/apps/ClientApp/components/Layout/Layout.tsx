import { FC, PropsWithChildren } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { TSeoProps } from 'types'
import { AppHead } from './components/AppHead/AppHead'

type TProps = {
  seoProps: TSeoProps
} & PropsWithChildren

const Layout: FC<TProps> = ({ seoProps, children }) => {
  return (
    <div className="flex w-full flex-col min-h-full">
      <AppHead seo={seoProps} />
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }
