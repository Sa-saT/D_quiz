import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'

export default defineNuxtPlugin( nuxtApp => {
    const vuetify = createVuetify({
        components
    });

    nuxtApp.vueApp.use( vuetify );
});
// 書き方間違ってると思うので大幅に書き直す。