import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import axios from 'axios'
import 'admin/locales/i18n'
import { Layout } from './components/Layout/Layout'

//@ts-expect-error
const csrfToken = document.querySelector('meta[name=csrf-token]')?.content
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

const createAdminApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob('admin/pages/**/*.tsx', { eager: true })
      let page = pages[`/apps/AdminApp/pages/${name}.tsx`]

      if (!page) throw new Error(`Unknown page ${name}. Is it located under 'pages' with a .tsx extension?`)
      //@ts-expect-error
      page.default.layout = name.startsWith('Login')
        ? undefined
        : //@ts-expect-error
          page.default.layout || ((page) => <Layout children={page} />)

      return page
    },
    setup({ el, App, props }) {
      createRoot(el).render(
        <React.StrictMode>
          <App {...props} />
        </React.StrictMode>,
      )
    },
  })

export { createAdminApp }
