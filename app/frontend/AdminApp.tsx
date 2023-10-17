import React from 'react'
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'

const createAdminApp = () =>
  createInertiaApp({
    resolve: (name) => {
      const pages = import.meta.glob(['./pages/admin/*.tsx'], { eager: true })
      return pages[`./pages/admin/${name}.tsx`]
    },
    setup({ el, App, props }) {
      createRoot(el).render(
        <React.StrictMode>
          <App {...props} />
        </React.StrictMode>,
      )
    },
    progress: {
      delay: 250,
      color: '#29d',
      includeCSS: true,
      showSpinner: false,
    },
  })

export { createAdminApp }
