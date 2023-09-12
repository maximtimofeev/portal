import { FC } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type TProps = {}

const PostsPage: FC<TProps> = () => {
  return (
    <div>
      <span>posts</span>
      <div>
        {[1, 2, 3].map((id) => {
          return (
            <NavLink to={`/posts/${id}`} replace key={id}>
              {id}
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export { PostsPage }
