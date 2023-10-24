import { FC } from 'react'
import { Classes } from '@blueprintjs/core'
import cn from 'classnames'

import { NavItem } from './components/NavItem/NavItem'

type TProps = {}

const Navigation: FC<TProps> = () => {
  return (
    <nav className={cn('flex w-full flex-col items-center px-0 py-3', Classes.DARK)}>
      <NavItem href="/admin" label="Home" icon="home" />
      <NavItem href="/admin/users" label="Users" icon="people" />
    </nav>
  )
}

export { Navigation }
