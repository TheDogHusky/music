<script setup lang="ts">

</script>

<template>
    <main class="flex flex-col items-center px-2 md:p-0 justify-center w-full text-white h-screen bg-bunker-950 gap-5">
        <div class="flex flex-col gap-2 items-center justify-center">
            <h1 class="group">About <span class="duration-200 group-hover:text-secondary font-semibold text-primary">Me</span></h1>
            <p class="text-xl font-semibold text-center">"Time To Cry" is available on <NuxtStyledLink href="https://distrokid.com/hyperfollow/adambillard/time-to-cry" target="_blank">major streaming platforms</NuxtStyledLink>!</p>
        </div>
        <NuxtImg src="/songs/ttc.png" format="webp" alt="Time To Cry image" class="rounded-md inline h-86 w-86 md:h-128 md:w-128" />
    </main>
</template>