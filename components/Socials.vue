<script setup lang="ts">
import ButtonLink from "~/components/ButtonLink.vue";
import { twMerge } from "tailwind-merge";
import DeezerSVG from "assets/icons/deezer.svg";

const props = defineProps<{
    type?: string;
}>();

const types = ["footer", "header", "contact", "music"];
const type = (types.includes(props.type as string) ? props.type : "header") as string;

const links = [
    {
        name: "Twitter",
        showSelf: type !== "music",
        showName: type === "contact",
        icon: "nf-cod-twitter",
        href: "https://www.twitter.com/ClassyCraft3r"
    },
    {
        name: "Instagram",
        showSelf: type !== "music",
        showName: type === "contact",
        icon: "nf-fa-instagram",
        href: "https://www.instagram.com/adambillardmusic/"
    },
    {
        name: "YouTube",
        showSelf: type !== "music" && type !== "contact",
        showName: type === "contact",
        icon: "nf-fa-youtube",
        href: "https://www.youtube.com/@adambillardofficial"
    },
    {
        name: "Discord",
        showSelf: type !== "music",
        showName: type === "contact",
        icon: "nf-fa-discord",
        href: "https://discord.gg/d7dFSBcumt"
    },
    {
        name: "E-Mail",
        showSelf: type === "contact",
        showName: type === "contact",
        icon: "nf-oct-mail",
        href: "mailto:contact@classydev.fr"
    },
    {
        name: "Website",
        showSelf: type !== "music" && type !== "contact",
        showName: type === "contact",
        icon: "nf-oct-link",
        href: "https://classydev.fr"
    },
    {
        name: "Spotify",
        showSelf: type === "music",
        showName: false,
        icon: "nf-fa-spotify",
        href: "https://open.spotify.com/intl-fr/artist/6X7S0mL7hoLfO4KvZ5JKfC"
    },
    {
        name: "Amazon Music",
        showSelf: type === "music",
        showName: false,
        icon: "nf-fa-amazon",
        href: "https://music.amazon.fr/artists/B0CJ7MBCMK/adam-billard"
    },
    {
        name: "Apple Music",
        showSelf: type === "music",
        showName: false,
        icon: "nf-fa-apple",
        href: "https://music.apple.com/us/artist/adam-billard/1707702995"
    },
    {
        name: "Deezer",
        showSelf: type === "music",
        showName: false,
        icon: "/deezer.svg",
        href: "https://deezer.page.link/z323FFbE4yFQQnfx8"
    },
    {
        name: "YouTube Music",
        showSelf: type === "music",
        showName: false,
        icon: "nf-fa-youtube",
        href: "https://music.youtube.com/channel/UCAvZuyiIhBwTGR4V_TyIpag"
    }
];

const socialsSizes: { [key: string]: string } = {
    footer: "lg:text-2xl text-2xl",
    header: "lg:text-6xl gap-4 text-3xl gap-2",
    music: "lg:text-6xl gap-4 text-3xl gap-2",
    contact: "lg:text-6xl md:text-3xl text-xl"
};

const buttonSocialsSizes: {[key: string]: string} = {
    footer: "lg:text-2xl text-2xl",
    header: "lg:text-5xl text-3xl",
    music: "lg:text-5xl text-3xl",
    contact: "lg:text-5xl sm:text-2x md:text-3xl text-xl"
};

const socialsClass = computed(() => {
    return twMerge(
        "flex flex-row gap-4 sm:gap-2 justify-center flex-wrap sm:flex-nowrap items-center text-gray-300 md:text-2xl lg:text-4xl text-2xl",
        socialsSizes[type]
    );
});
</script>

<template>
    <div :class="socialsClass">
        <template v-for="link of links">
            <ButtonLink :key="link.name" special="socials" :class="buttonSocialsSizes[type]" :href="link.href" target="_blank" variant="icon" v-if="link.showSelf">
                <Icon :name="link.icon" v-if="link.name !== 'Deezer'" />
                <DeezerSVG class="h-6 w-6 deezer-icon" v-else />
                <span v-if="link.showName">{{ link.name }}</span>
            </ButtonLink>
        </template>
    </div>
</template>

<style>
@import "~/assets/css/nerdfonts.css";
</style>