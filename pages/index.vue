<script setup lang="ts">
import Socials from "~/components/Socials.vue";
</script>

<template>
  <main class="flex flex-col items-center justify-center w-full h-full bg-neutral-950 gap-2">
    <img src="public/logo.webp" alt="logo" class="w-40 h-40" />
    <h1 class="cursor-default border-b-4 border-transparent hover:border-secondary border-dashed pb-2 text-5xl font-normal text-white hover:text-primary duration-200 group"><span class="duration-200 group-hover:text-secondary font-semibold text-primary">Adam Billard</span>, young musician.</h1>
    <Socials type="header" />
  </main>
</template>