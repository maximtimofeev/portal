import { Header } from 'components/Header/Header'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

type TProps = {}

const App: FC<TProps> = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export { App }
