import { Classes } from '@blueprintjs/core'
import { FC } from 'react'
import { NavItem } from './components/NavItem/NavItem'
import cn from 'classnames'

type TProps = {}

const Navigation: FC<TProps> = ({}) => {
  return (
    <nav className={cn('flex w-full flex-col items-center py-3 px-0', Classes.DARK)}>
      <NavItem href="/admin" label="Home" icon="home" />
      <NavItem href="/admin/users" label="Users" icon="people" />
    </nav>
  )
}

export { Navigation }
