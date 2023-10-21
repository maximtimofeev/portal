import { Button, H2, Tooltip } from '@blueprintjs/core'
import { Link, usePage } from '@inertiajs/react'
import { FC } from 'react'

type TProps = {}

const Header: FC<TProps> = ({}) => {
  const page = usePage<{ title: string }>()

  return (
    <header className="flex flex-none fixed z-1 w-[calc(100vw-15rem)] top-0 left-60 h-12 bg-slate-100 justify-between items-center px-3">
      <div className="flex">
        <H2>{page.props.title}</H2>
      </div>
      <div className="flex">
        <Tooltip content="Sign out">
          <Link href="/admin/logout" method="delete">
            <Button icon="log-out" />
          </Link>
        </Tooltip>
      </div>
    </header>
  )
}

export { Header }