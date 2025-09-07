import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: false },
    modules: ['@nuxt/image', 'nuxt-svgo', '@nuxt/fonts', '@vueuse/nuxt'],
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
        ],
        server: {
            allowedHosts: ['localhost', 'adambillarddev.loca.lt']
        }
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
            },
            {
                name: 'Playfair Display',
                weights: ['400', '700', '900'],
                styles: ['normal', 'italic'],
                display: 'swap'
            },
            {
                name: 'Epunda Slab',
                weights: ['400', '700'],
                styles: ['normal'],
                display: 'swap'
            }
        ]
    }
});