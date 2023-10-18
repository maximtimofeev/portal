import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'

const pages = import.meta.glob('/pages/client/**/*.tsx', { eager: true })

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      return pages[`/pages/client/${name}.tsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)
