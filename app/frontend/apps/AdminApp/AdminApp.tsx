import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import axios from 'axios'
import { TInertiaPage } from 'types'

import { Layout } from './components/Layout/Layout'

import 'admin/locales/i18n'

// @ts-expect-error
const csrfToken: string = document.querySelector('meta[name=csrf-token]')?.content as string

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

const createAdminApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob<TInertiaPage>('admin/pages/**/*.tsx', { eager: true })

      let page = pages[`/apps/AdminApp/pages/${name}.tsx`]

      if (!page) throw new Error(`Unknown page ${name}. Is it located under 'pages' with a .tsx extension?`)
      page.default.layout = name.startsWith('Login')
        ? undefined
        : page.default.layout || ((page) => <Layout>{page}</Layout>)

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
