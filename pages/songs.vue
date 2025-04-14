<script setup lang="ts">
const songs = [
    {
        name: "Time To Cry",
        image: "/songs/ttc.png",
        link: "https://distrokid.com/hyperfollow/adambillard/time-to-cry",
    },
    {
        name: "I Don't Wanna Suffer Again",
        image: "/songs/idwsa.webp",
        link: "https://distrokid.com/hyperfollow/adambillard/i-dont-wanna-suffer-again",
    },
    {
        name: "I Want A Girlfriend",
        image: "/songs/iwag.webp",
        link: "https://distrokid.com/hyperfollow/adambillard/i-want-a-girlfriend",
    },
    {
        name: "Destroying Me Quit",
        image: "/songs/dmq.webp",
        link: "https://distrokid.com/hyperfollow/adambillard/destroying-me-quit",
    }
];
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full text-white h-main bg-slate-950 gap-2 app-header">
        <h1 class="group">My <span class="special">Songs</span></h1>
        <p class="text-xl font-semibold text-center">All my songs are available on <NuxtStyledLink href="https://distrokid.com/hyperfollow/adambillard" target="_blank">major streaming platforms</NuxtStyledLink>!</p>
    </main>
    <section class="flex flex-col items-center p-4 md:py-4 justify-center w-full text-white min-h-screen bg-bunker-950 gap-5">
        <div class="flex flex-row flex-wrap items-center justify-center w-full gap-4">
            <a v-for="song of songs" :key="song.name" :href="song.link" target="_blank" class="flex duration-300 transition-colors flex-col items-center justify-center text-secondary hover:text-primary bg-bunker-950 gap-2">
                <h3 class="text-xl md:text-2xl m-0 font-bold text-center">{{ song.name }}</h3>
                <div class="rounded-md overflow-hidden inline h-86 w-86 md:h-128 md:w-128"><img :src="song.image" :alt="song.name" class="object-fill duration-300 transition-transform hover:scale-110" /></div>
            </a>
        </div>
    </section>
</template>