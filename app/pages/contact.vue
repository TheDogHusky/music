<script setup lang="ts">
const description = "Get in touch with me through my contact page. I would love to hear from you!";

useSeoMeta({
    title: 'Contact',
    description,
    ogTitle: 'Contact Me',
    ogDescription: description
});
</script>

<template>
    <main class="flex flex-col items-center justify-center w-full text-white h-main img-bg img-bg-2 gap-2 app-header">
        <h1 data-aos="fade" class="group">Contact <span class="special">Me</span></h1>
        <Socials data-aos="fade" data-aos-delay="200" type="contact" />
    </main>
</template>