import { FC } from 'react'
import { Navigation } from './components/Navigation/Navigation'

type TProps = {}

const Header: FC<TProps> = ({}) => {
  return (
    <header className="flex flex-none w-full h-16 bg-slate-500 justify-center items-center">
      <Navigation />
    </header>
  )
}

export { Header }
