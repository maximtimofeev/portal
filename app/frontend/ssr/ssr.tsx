import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import 'client/locales/i18n'

const pages = import.meta.glob('client/pages/**/*.tsx', { eager: true })

createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      return pages[`/apps/ClientApp/pages/${name}.tsx`]
    },
    setup: ({ App, props }) => <App {...props} />,
  }),
)
