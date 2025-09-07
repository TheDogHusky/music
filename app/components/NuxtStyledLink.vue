<script setup lang="ts">
const props = defineProps<{
    to?: string;
    disabled?: boolean;
    target?: string;
}>();
</script>

<template>
    <NuxtLink v-bind="props" class="inline-flex flex-row gap-2 items-center border-none slide-animation">
        <slot></slot>
    </NuxtLink>
</template>