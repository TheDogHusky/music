<script setup lang="ts">
const description = "Learn more about Adam Billard, a young French songwriter who sings in English and has been writing songs since he was 13.";

useSeoMeta({
    title: 'About Me',
    description,
    ogTitle: 'About Me',
    ogDescription: description
});
</script>

<template>
    <main class="flex flex-col items-center p-4 md:p-2 justify-center w-full text-white min-h-screen img-bg img-bg-3 gap-5">
        <div class="flex flex-col gap-8 items-center justify-center mt-16 w-full max-w-full">
            <h1 class="group" data-aos="fade">About <span class="special">Me</span></h1>
            <div data-aos="fade" data-aos-delay="100" class="flex flex-col-reverse justify-center items-center md:flex-row gap-12 max-w-full w-full">
                <div class="md:w-sm w-xs transition-transform transform-none hover:rotate-2 hover:scale-105">
                    <NuxtImg src="/images/adam_selfie.jpg" placeholder height="1080" width="720" class="object-cover w-full h-full rounded-md" />
                </div>
                <div
                    class="text-left text-base sm:text-lg sm:w-lg w-auto md:text-lg lg:text-xl lg:w-2xl flex flex-col gap-2 md:gap-8 lg:gap-10 font-epunda md:leading-6 lg:leading-8 text-wrap"
                >
                    <p>
                        Hello, my name's Adam Billard. I'm a young French songwriter who sings in English. I'm currently 18 years old, and I've been writing songs since I was 13.
                    </p>
                    <p>
                        I started learning music when I was seven or eight years old with Harp and solfège. After a while, I got tired of playing music and stopped for several years.
                    </p>
                    <p>
                        At 13 years old, I needed to learn something on guitar for a school project. So I did. My new passion for music started with that, and from then on, I spent my time learning guitar and writing songs.
                    </p>
                    <p>
                        After that, I took guitar classes with Jesse Hite. I made my first ever song, "I Don't Wanna Suffer Again," while feeling heartbroken and made a studio version with Jesse several months after.
                    </p>
                    <p>
                        Then, I started a band with some friends, and we made several concerts. I'm also a developer and am currently learning several different languages and web technologies, including JavaScript. Now I'm here—making songs, developing websites, and enjoying life with music!
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
