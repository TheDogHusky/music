import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', 'nuxt-svgo', '@nuxt/fonts'],
    css: ['~/assets/css/tailwind.css'],
    typescript: {
        strict: true
    },
    svgo: {
        autoImportPath: '~/assets/icons'
    },
    router: {
        options: {
            linkActiveClass: 'text-secondary',
            linkExactActiveClass: 'text-red'
        }
    },
    plugins: [{ src: '~/plugins/aos.client', mode: 'client' }],
    vite: {
        plugins: [
            tailwindcss()
        ]
    },
    fonts: {
        families: [
            {
                name: 'Cinzel',
                weights: ['400', '700'],
                styles: ['normal'],
                display: 'swap'
            },
            {
                name: 'Cantata One',
                weights: ['400'],
                styles: ['normal'],
                display: 'swap'
            },
            {
                name: 'Bree Serif',
                weights: ['400'],
                styles: ['normal'],
                display: 'swap'
            }
        ]
    }
});