<script setup lang="ts">
import ButtonLink from "~/components/ButtonLink.vue";

const props = defineProps(["type"]);

const types = ["footer", "header", "contact"]
const type = types.includes(props.type) ? props.type : "header";
</script>

<template>
  <div class="flex flex-row gap-2 justify-center items-center text-gray-300 text-4xl">
    <ButtonLink href="https://classydev.fr" target="_blank" ><i class="nf nf-cod-account"></i></ButtonLink>
  </div>
</template>

<style>
@import "~/assets/css/nerdfonts.css";
</style>