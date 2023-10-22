import { FC } from 'react'
import { Logo } from './components/Logo/Logo'
import { Navigation } from './components/Navigation/Navigation'

type TProps = {}

const Aside: FC<TProps> = () => {
  return (
    <aside className="flex flex-col w-60 bg-slate-500 h-full fixed z-10 top-0 left-0 overflow-x-hidden shadow-main">
      <Logo />
      <Navigation />
    </aside>
  )
}

export { Aside }
