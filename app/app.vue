<script setup lang="ts">
onMounted(() => {
    useNuxtApp().$aos().init({
        duration: 1000,
        easing: 'ease-in-out',
        anchorPlacement: 'top-bottom',
        offset: -100,
        once: true,
        mirror: false
    });
    window.onresize = function () {
        useNuxtApp().$aos().refresh();
    }
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Adam Billard` : 'Home - Adam Billard';
    },
    script: [
        {
            src: "https://plausible.classydev.fr/js/script.js",
            defer: true,
            "data-domain": "music.classydev.fr"
        }
    ],
    htmlAttrs: {
        class: "scroll-smooth",
        lang: "en"
    }
});

useSeoMeta({
    description: "Adam Billard's Music Portfolio. Adam Billard is a young French musician that started making music at 13 years old.",
    themeColor: "#d67c48",
    twitterCard: "summary_large_image",
    twitterSite: "@ClassyCraft3r",
    twitterCreator: "@ClassyCraft3r",
    ogUrl: "https://music.classydev.fr",
    ogType: "website",
    ogLocale: "en_US",
    ogSiteName: "Adam Billard",
    ogImage: "/images/adam_selfie.jpg",
    ogTitle: "Adam Billard",
    ogDescription: "Adam Billard's Music Portfolio. Adam Billard is a young French musician that started making music at 13 years old.",
});
</script>

<template>
    <div class="flex flex-col text-white">
        <NuxtLoadingIndicator :throttle="0" color="linear-gradient(to right bottom, #d67c48, #bc9b8f)" />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>