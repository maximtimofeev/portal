import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { TInertiaPage } from 'types'

import { Layout } from './components/Layout/Layout'

import 'client/locales/i18n'

const createClientApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob<TInertiaPage>('client/pages/**/*.tsx', {
        eager: true,
      })

      let page = pages[`/apps/ClientApp/pages/${name}.tsx`]

      if (!page) throw new Error(`Unknown page ${name}. Is it located under 'pages' with a .tsx extension?`)

      if (!page.default.layout) {
        page.default.layout = (page) => <Layout>{page}</Layout>
      }

      return page
    },
    setup({ el, App, props }) {
      const appComponent = (
        <React.StrictMode>
          <App {...props} />
        </React.StrictMode>
      )

      if (import.meta.env.PROD) {
        hydrateRoot(el, appComponent)
      } else {
        createRoot(el).render(appComponent)
      }
    },
  })

export { createClientApp }
