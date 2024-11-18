<script setup lang="ts">
import ButtonLink from "~/components/ButtonLink.vue";
import { twMerge } from "tailwind-merge";

const props = defineProps<{
  type?: string;
}>();

const types = ["footer", "header", "contact"];
const type = types.includes(props.type) ? props.type : "header";

const socialsSizes: {[key: string]: string} = {
  footer: "!text-2xl max-sm:!text-2xl",
  header: "!text-6xl gap-4 max-sm:!text-3xl max-sm:gap-2",
  contact: "!text-8xl max-sm:!text-3xl"
};

const buttonSocialsSizes: {[key: string]: string} = {
  footer: "!text-2xl max-sm:!text-2xl",
  header: "!text-5xl max-sm:!text-3xl",
  contact: "!text-8xl max-sm:!text-3xl"
};

const socialsClass = computed(() => {
  return twMerge(
      "flex flex-row gap-2 justify-center items-center text-gray-300 !text-4xl max-sm:!text-2xl",
      socialsSizes[type]
  );
});
</script>

<template>
  <div :class="socialsClass">
    <ButtonLink :class="buttonSocialsSizes[type]" href="https://www.twitter.com/ClassyCraft3r" target="_blank" variant="icon"><Icon name="nf-cod-twitter" /></ButtonLink>
    <ButtonLink :class="buttonSocialsSizes[type]" href="https://www.instagram.com/adambillardmusic/" target="_blank" variant="icon"><Icon name="nf-fa-instagram" /></ButtonLink>
    <ButtonLink :class="buttonSocialsSizes[type]" href="https://www.youtube.com/@adambillardofficial" target="_blank" variant="icon"><Icon name="nf-fa-youtube" /></ButtonLink>
    <ButtonLink :class="buttonSocialsSizes[type]" href="https://discord.gg/d7dFSBcumt" target="_blank" variant="icon"><Icon name="nf-fa-discord" /></ButtonLink>
    <ButtonLink :class="buttonSocialsSizes[type]" href="mailto://contact@classydev.fr" target="_blank" variant="icon"><Icon name="nf-oct-mail" /></ButtonLink>
    <ButtonLink :class="buttonSocialsSizes[type]" href="https://classydev.fr" target="_blank" variant="icon"><Icon name="nf-oct-link" /></ButtonLink>
  </div>
</template>

<style>
@import "~/assets/css/nerdfonts.css";
</style>