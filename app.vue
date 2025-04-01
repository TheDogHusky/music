<script setup lang="ts">
onMounted(() => {
    useNuxtApp().$aos().init();
    window.onresize = function () {
        useNuxtApp().$aos().refresh();
    }
});

useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Adam Billard, young musician` : 'Adam Billard, young musician';
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
    themeColor: "#3777ff",
    twitterCard: "summary_large_image",
    twitterSite: "@ClassyCraft3r",
    twitterCreator: "@ClassyCraft3r",
    ogUrl: "https://music.classydev.fr",
    ogType: "website",
    ogLocale: "en_US",
    ogSiteName: "Adam Billard, young musician",
    ogTitle: "Adam Billard, young musician",
    ogDescription: " Adam Billard's Music Portfolio. Adam Billard is a young French musician that started making music at 13 years old.",
});
</script>

<template>
    <div class="flex flex-col text-white">
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style class="scoped">
body {
    background-color: var(--color-slate-950);
}
</style>