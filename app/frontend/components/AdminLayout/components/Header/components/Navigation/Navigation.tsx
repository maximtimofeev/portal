import { Link } from '@inertiajs/react'
import { Button } from 'components/Button/Button'
import { FC } from 'react'

type TProps = {}

const Navigation: FC<TProps> = ({}) => {
  return (
    <nav className="flex">
      <li className="flex">
        <Link href="/admin">
          <Button>HomePage</Button>
        </Link>
      </li>
      <li className="flex">
        <Link href="/admin/users">
          <Button>Users</Button>
        </Link>
      </li>
    </nav>
  )
}

export { Navigation }
