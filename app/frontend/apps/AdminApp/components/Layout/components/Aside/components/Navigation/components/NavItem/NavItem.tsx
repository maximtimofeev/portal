import { FC } from 'react'
import { Button, ButtonProps } from '@blueprintjs/core'
import { Link } from '@inertiajs/react'

type TProps = {
  href: string
  label: string
} & Pick<ButtonProps, 'icon'>

const NavItem: FC<TProps> = ({ href, label, icon }) => {
  return (
    <li className="flex w-full">
      <Link className="flex w-full hover:no-underline" href={href}>
        <Button large icon={icon} intent="none" fill minimal alignText="left">
          {label}
        </Button>
      </Link>
    </li>
  )
}

export { NavItem }
