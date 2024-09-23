<script setup lang="ts">
import Socials from "~/components/Socials.vue";
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full text-white h-screen bg-neutral-950 gap-2">
    <NuxtImg src="public/logo.webp" alt="logo" class="w-40 h-40" />
    <h1 class="cursor-default border-b-4 border-transparent hover:border-secondary border-dashed pb-2 text-5xl font-normal text-white hover:text-primary duration-200 group"><span class="duration-200 group-hover:text-secondary font-semibold text-primary">Adam Billard</span>, young musician.</h1>
    <Socials type="header" />
    <a href="#content" class="animate-bounce text-4xl rounded-full bg-transparent hover:bg-secondary hover:text-neutral-950 duration-200 focus:ring focus:ring-secondary focus:ring-opacity-50 m-0 p-0 flex justify-center items-center border-2 border-secondary text-secondary bottom-4 absolute"><Icon name="nf-oct-arrow_down" /></a>
  </main>
  <section id="content" class="flex flex-col items-center justify-center w-full text-white h-screen bg-neutral-900 gap-2">
    <h2 class="text-2xl font-bold">My New Song</h2>
    <p class="text-xl font-semibold">"Destroying Me Quit" is available on <NuxtStyledLink href="https://uwu.com">major streaming platforms</NuxtStyledLink>!</p>
  </section>
</template>