<script setup lang="ts">
import type { ButtonLinkProps } from "./button.types";

const props = defineProps<ButtonLinkProps>();
</script>

<template>
    <NuxtLink v-bind="props" class="text-secondary text-xl border-b-2 border-dashed border-secondary hover:text-primary duration-200">
        <slot></slot>
    </NuxtLink>
</template>