import { FC } from 'react'
import { NavLink } from 'react-router-dom'

type TProps = {
  lol?: boolean
}

const Header: FC<TProps> = () => {
  return (
    <div className="flex justify-center w-full h-6 bg-green-700">
      <nav className="flex">
        <li className="list-none mr-3">
          <NavLink to="/">main</NavLink>
        </li>
        <li className="list-none">
          <NavLink to="posts">posts</NavLink>
        </li>
      </nav>
    </div>
  )
}

export { Header }
