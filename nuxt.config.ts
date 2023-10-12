import { NitroConfig } from "nitropack"
import redirects from './config/redirects'

export default defineNuxtConfig({
  extends: '@barbapapazes/solo-sphere',

  nitro: {
    routeRules: {
      ...redirects as NitroConfig['routeRules'],
    },
  },

  devtools: { enabled: true },
})
