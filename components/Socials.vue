<script setup lang="ts">
import ButtonLink from "~/components/ButtonLink.vue";
import { twMerge } from "tailwind-merge";

const props = defineProps<{
    type?: string;
}>();

const types = ["footer", "header", "contact"];
const type = (types.includes(props.type as string) ? props.type : "header") as string;

const socialsSizes: { [key: string]: string } = {
    footer: "lg:text-2xl text-2xl",
    header: "lg:text-6xl gap-4 text-3xl gap-2",
    contact: "lg:text-6xl md:text-3xl text-xl"
};

const buttonSocialsSizes: {[key: string]: string} = {
    footer: "lg:text-2xl text-2xl",
    header: "lg:text-5xl text-3xl",
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
        <ButtonLink special="socials" :class="buttonSocialsSizes[type]" href="https://www.twitter.com/ClassyCraft3r" target="_blank" variant="icon">
            <Icon name="nf-cod-twitter" />
            <span v-if="props.type === 'contact'">Twitter</span>
        </ButtonLink>
        <ButtonLink special="socials" :class="buttonSocialsSizes[type]" href="https://www.instagram.com/adambillardmusic/" target="_blank" variant="icon">
            <Icon name="nf-fa-instagram" />
            <span v-if="props.type === 'contact'">Instagram</span>
        </ButtonLink>
        <ButtonLink v-if="props.type !== 'contact'" special="socials" :class="buttonSocialsSizes[type]" href="https://www.youtube.com/@adambillardofficial" target="_blank" variant="icon">
            <Icon name="nf-fa-youtube" />
        </ButtonLink>
        <ButtonLink special="socials" :class="buttonSocialsSizes[type]" href="https://discord.gg/d7dFSBcumt" target="_blank" variant="icon">
            <Icon name="nf-fa-discord" />
            <span v-if="props.type === 'contact'">Discord</span>
        </ButtonLink>
        <ButtonLink special="socials" :class="buttonSocialsSizes[type]" href="mailto://contact@classydev.fr" target="_blank" variant="icon">
            <Icon name="nf-oct-mail" />
            <span v-if="props.type === 'contact'">E-Mail</span>
        </ButtonLink>
        <ButtonLink v-if="props.type !== 'contact'"  special="socials" :class="buttonSocialsSizes[type]" href="https://classydev.fr" target="_blank" variant="icon">
            <Icon name="nf-oct-link" />
        </ButtonLink>
    </div>
</template>

<style>
@import "~/assets/css/nerdfonts.css";
</style>