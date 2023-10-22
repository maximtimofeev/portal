import { Button } from '@blueprintjs/core'
import { Link } from '@inertiajs/react'
import { FC } from 'react'

type TProps = {}

const Navigation: FC<TProps> = ({}) => {
  return (
    <nav className="flex">
      <li className="flex">
        <Link href="/">
          <Button>HomePage</Button>
        </Link>
      </li>
      <li className="flex">
        <Link href="/example">
          <Button>ExamplePage</Button>
        </Link>
      </li>
    </nav>
  )
}

export { Navigation }
