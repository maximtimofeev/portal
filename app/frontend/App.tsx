import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import 'locales/client/i18n'

const pages = import.meta.glob('/pages/client/**/*.tsx')

const createApp = () =>
  createInertiaApp({
    resolve: async (name) => {
      //@ts-expect-error
      const page = (await pages[`/pages/client/${name}.tsx`]()).default

      if (!page) throw new Error(`Unknown page ${name}. Is it located under 'pages' with a .tsx extension?`)

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

export { createApp }
