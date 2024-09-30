<script setup lang="ts">
import Socials from "~/components/Socials.vue";
import ScrollButton from "~/components/ScrollButton.vue";
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full text-white h-screen bg-neutral-950 gap-2">
    <NuxtImg src="/logo.webp" alt="logo" class="w-40 h-40" />
    <h1 class="cursor-default border-b-4 border-transparent hover:border-secondary border-dashed pb-2 text-5xl font-normal text-white hover:text-primary duration-200 group"><span class="duration-200 group-hover:text-secondary font-semibold text-primary">Adam Billard</span>, young musician.</h1>
    <Socials type="header" />
    <ScrollButton href="#content" />
  </main>
  <section id="content" class="flex flex-col items-center justify-center w-full text-white h-screen bg-neutral-900 gap-2">
    <h2 class="text-2xl font-bold">My New Song</h2>
    <p class="text-xl font-semibold">"Destroying Me Quit" is available on <NuxtStyledLink href="https://uwu.com">major streaming platforms</NuxtStyledLink>!</p>
    <NuxtImg src="/songs/dmq.webp" format="webp" alt="Destroying Me Quit image" class="rounded inline h-96 w-96" />
  </section>
</template>