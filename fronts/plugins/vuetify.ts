import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    // icons: {
    //   defaultSet: 'mdi',
    //   aliases,
    //   sets: {
    //     mdi
    //   }
    // }
  })
  app.vueApp.use(vuetify);
})