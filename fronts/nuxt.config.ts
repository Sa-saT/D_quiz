// https://nuxt.com/docs/api/configuration/nuxt-config
// https://developer.mamezou-tech.com/nuxt/nuxt3-rendering-mode/
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  vite: {
    // HMR の問題 ngrok
    // https://techlog.n2i.jp/entry/2023/10/10/094549
    server: {
      hmr: {
        host: 'localhost',
      },
    },
  
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  }
})
