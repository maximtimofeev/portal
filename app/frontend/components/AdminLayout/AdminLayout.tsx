import { FC, PropsWithChildren } from 'react'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Aside } from './components/Aside/Aside'

type TProps = {} & PropsWithChildren

const AdminLayout: FC<TProps> = ({ children }) => {
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

export { AdminLayout }
