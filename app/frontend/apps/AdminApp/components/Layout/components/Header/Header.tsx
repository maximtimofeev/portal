import { FC } from 'react'
import { Button, H2, Tooltip } from '@blueprintjs/core'
import { router, usePage } from '@inertiajs/react'

type TProps = {}

const Header: FC<TProps> = () => {
  const page = usePage<{ title: string }>()

  return (
    <header className="fixed left-60 top-0 z-1 flex h-12 w-[calc(100vw-15rem)] flex-none items-center justify-between bg-slate-100 px-3 shadow-secondary">
      <div className="flex">
        <H2>{page.props.title ?? ''}</H2>
      </div>
      <div className="flex">
        <Tooltip content="Sign out">
          <Button icon="log-out" onClick={() => router.delete('/admin/logout')} />
        </Tooltip>
      </div>
    </header>
  )
}

export { Header }
