import { App } from 'components/App/App'
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage'
import { PostsPage } from 'pages/PostsPage/PostsPage'
import { PostPage } from 'pages/PostsPage/subPages/PostPage/PostPage'
import { RootPage } from 'pages/RootPage/RootPage'
import { RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <RootPage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
      {
        path: 'posts/:postId',
        element: <PostPage />,
      },
    ],
  },
]

const patchRoute = (route: RouteObject) => {
  route.errorElement = <NotFoundPage />
  route.children?.forEach((childrenRoute) => patchRoute(childrenRoute))
}

routes.forEach((route) => {
  patchRoute(route)
})

export { routes }
