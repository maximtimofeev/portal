import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import axios from 'axios'

//@ts-expect-error
const csrfToken = document.querySelector('meta[name=csrf-token]')?.content
axios.defaults.headers.common['X-CSRF-Token'] = csrfToken

const pages = import.meta.glob('/pages/admin/**/*.tsx')

const createAdminApp = () =>
  createInertiaApp({
    resolve: async (name) => {
      //@ts-expect-error
      const page = (await pages[`/pages/admin/${name}.tsx`]()).default

      if (!page) throw new Error(`Unknown page ${name}. Is it located under 'pages' with a .tsx extension?`)

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
