import { FC } from 'react'

import { Navigation } from './components/Navigation/Navigation'

type TProps = {}

const Header: FC<TProps> = () => {
  return (
    <header className="flex h-16 w-full flex-none items-center justify-center bg-slate-500">
      <Navigation />
    </header>
  )
}

export { Header }
