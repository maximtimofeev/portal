import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'

import enJSON from './en.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { ...enJSON },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})
