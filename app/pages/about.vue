<script setup lang="ts">

</script>

<template>
    <main class="flex flex-col items-center p-2 justify-center w-full text-white min-h-screen img-bg img-bg-3 gap-5">
        <div class="flex flex-col gap-8 items-center justify-center">
            <h1 data-aos-anchor-placement="top-bottom" class="group" data-aos-easing="ease-in-out" data-aos="fade-down" data-aos-duration="500">About <span class="special">Me</span></h1>
            <div class="flex flex-row gap-12">
                <div class="max-w-sm w-auto h-auto">
                    <NuxtImg src="/images/adam_selfie.jpg" class="object-cover w-full h-full rounded-md" />
                </div>
                <div
                    data-aos-anchor-placement="top-bottom"
                    class="text-left text-base sm:text-lg w-auto md:text-xl md:w-2xl flex flex-col gap-10 font-epunda leading-8"
                    data-aos-easing="ease-in-out"
                    data-aos="fade-right"
                    data-aos-delay="100"
                    data-aos-duration="500"
                >
                    <p>
                        Hello, my name's Adam Billard. I'm a young French songwriter who sings in English. I'm currently 16 years old, and I've been writing songs since I was 13.
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