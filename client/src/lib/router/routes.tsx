import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage'
import { PostsPage } from 'pages/PostsPage/PostsPage'
import { RootPage } from 'pages/RootPage/RootPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootPage />,
  },
  {
    path: '/posts',
    element: <PostsPage />,
  },
]

routes.forEach((route) => {
  route.errorElement = <NotFoundPage />
})

export { routes }
