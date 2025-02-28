// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false  },
  extends: ['shadcn-docs-nuxt'],
  compatibilityDate: '2024-07-06',
  modules: [
    '@nuxthq/studio'
  ]
});