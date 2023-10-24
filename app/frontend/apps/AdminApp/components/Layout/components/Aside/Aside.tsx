import { FC } from 'react'

import { Logo } from './components/Logo/Logo'
import { Navigation } from './components/Navigation/Navigation'

type TProps = {}

const Aside: FC<TProps> = () => {
  return (
    <aside className="fixed left-0 top-0 z-10 flex h-full w-60 flex-col overflow-x-hidden bg-slate-500 shadow-main">
      <Logo />
      <Navigation />
    </aside>
  )
}

export { Aside }
