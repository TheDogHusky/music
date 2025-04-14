<script setup lang="ts">

</script>

<template>
    <main class="flex flex-col items-center justify-center w-full text-white h-main bg-slate-950 gap-2 app-header">
        <NuxtImg data-aos-easing="ease-in-out" data-aos="fade-down" data-aos-duration="500" src="/logo.webp" alt="logo" class="h-30 w-30 md:w-40 md:h-40" />
        <h1 data-aos-easing="ease-in-out" data-aos-delay="100" data-aos="fade-down" data-aos-duration="500" class="group"><span class="special">Adam Billard</span>, young musician.</h1>
        <Socials data-aos-easing="ease-in-out" data-aos-delay="200" data-aos="fade-down" data-aos-duration="500" type="header" />
        <ScrollButton href="#content" />
    </main>
    <section id="content" class="flex flex-col items-center px-2 md:p-0 justify-center w-full text-white h-screen bg-bunker-950 gap-5">
        <div class="flex flex-col gap-2 items-center justify-center" data-aos-easing="ease-in-out" data-aos="fade-up" data-aos-duration="500">
            <h2 class="text-xl md:text-2xl m-0 font-bold">My New Song</h2>
            <p class="text-xl font-semibold text-center">"Time To Cry" is available on <NuxtStyledLink href="https://distrokid.com/hyperfollow/adambillard/time-to-cry" target="_blank">major streaming platforms</NuxtStyledLink>!</p>
        </div>
        <NuxtImg data-aos-easing="ease-in-out" data-aos="fade-up" data-aos-duration="500" src="/songs/ttc.png" format="webp" alt="Time To Cry image" class="rounded-md inline h-86 w-86 md:h-128 md:w-128" />
    </section>
</template>
