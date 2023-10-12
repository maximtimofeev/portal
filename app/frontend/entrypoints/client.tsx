import React from 'react'
import ReactDOM from 'react-dom/client'
import '../styles/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from 'lib/router/routes'

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
