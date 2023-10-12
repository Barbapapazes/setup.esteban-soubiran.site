import type { NitroConfig } from 'nitropack'
import redirects from './config/redirects'

export default defineNuxtConfig({
  extends: '@barbapapazes/solo-sphere',

  modules: ['@nuxthq/studio'],

  nitro: {
    routeRules: {
      ...redirects as NitroConfig['routeRules'],
    },
  },

  devtools: { enabled: true },
})
