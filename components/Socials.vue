<script setup lang="ts">
import ButtonLink from "~/components/ButtonLink.vue";

const props = defineProps(["type"]);

const types = ["footer", "header", "contact"]
const type = types.includes(props.type) ? props.type : "header";
</script>

<template>
  <div class="flex flex-row gap-2 justify-center items-center text-gray-300 text-4xl">
    <ButtonLink href="https://www.twitter.com/ClassyCraft3r" target="_blank" variant="icon"><Icon name="nf-cod-twitter" /></ButtonLink>
    <ButtonLink href="https://www.instagram.com/adambillardmusic/" target="_blank" variant="icon"><Icon name="nf-fa-instagram" /></ButtonLink>
    <ButtonLink href="https://www.youtube.com/@adambillardofficial" target="_blank" variant="icon"><Icon name="nf-fa-youtube" /></ButtonLink>
    <ButtonLink href="https://discord.gg/d7dFSBcumt" target="_blank" variant="icon"><Icon name="nf-fa-discord" /></ButtonLink>
    <ButtonLink href="mailto://contact@classydev.fr" target="_blank" variant="icon"><Icon name="nf-oct-mail" /></ButtonLink>
    <ButtonLink href="https://classydev.fr" target="_blank" variant="icon"><Icon name="nf-oct-link" /></ButtonLink>
  </div>
</template>

<style>
@import "~/assets/css/nerdfonts.css";
</style>