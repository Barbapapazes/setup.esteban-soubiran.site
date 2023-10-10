import type { NitroConfig } from 'nitropack'
import redirects from './config/redirects'

export default defineNitroConfig({
  routeRules: {
    '/': {
      prerender: true,
    },
    ...redirects as NitroConfig['routeRules'],
  },
})
