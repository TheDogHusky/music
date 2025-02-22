<script setup lang="ts">

</script>

<template>
  <main class="flex flex-col items-center justify-center w-full text-white h-[calc(100vh-80px)] bg-slate-950 gap-2">
    <NuxtImg src="/logo.webp" alt="logo" class="w-40 h-40" />
    <h1 class="cursor-default border-b-4 max-sm:text-3xl text-center border-transparent hover:border-secondary border-dashed pb-2 text-5xl font-normal text-white hover:text-primary duration-200 group"><span class="duration-200 group-hover:text-secondary font-semibold text-primary">Adam Billard</span>, young musician.</h1>
    <Socials type="header" />
    <ScrollButton href="#content" />
  </main>
  <section id="content" class="flex flex-col items-center justify-center w-full text-white h-screen bg-bunker-950 gap-5">
    <div class="flex flex-col gap-2 items-center justify-center">
      <h2 class="text-2xl m-0 font-bold">My New Song</h2>
      <p class="text-xl font-semibold">"Time To Cry" is available on <NuxtStyledLink href="https://distrokid.com/hyperfollow/adambillard/time-to-cry" target="_blank">major streaming platforms</NuxtStyledLink>!</p>
    </div>
    <NuxtImg src="/songs/ttc.png" format="webp" alt="Time To Cry image" class="rounded-md inline h-128 w-128" />
  </section>
</template>
