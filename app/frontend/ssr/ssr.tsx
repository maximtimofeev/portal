import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/inertia-react'
import cjsCreateServer from '@inertiajs/server'

//@ts-expect-error
const pages = import.meta.globEagerDefault('../pages/**/*.tsx')

// Unwrap the CJS module in @inertiajs/server.
//@ts-expect-error
const createServer = typeof cjsCreateServer === 'function' ? cjsCreateServer : cjsCreateServer.default

//@ts-expect-error
createServer((page) =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => pages[`../pages/${name}.jsx`],
    setup: ({ App, props }) => <App {...props} />,
  }),
)
