import { FC, PropsWithChildren } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { TSeoProps } from 'types'

type TProps = {} & PropsWithChildren

const AdminLayout: FC<TProps> = ({ children }) => {
  return (
    <div className="flex w-full flex-col min-h-full">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}

export { AdminLayout }
