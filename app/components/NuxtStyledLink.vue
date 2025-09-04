<script setup lang="ts">
const props = defineProps<{
    to?: string;
    disabled?: boolean;
    target?: string;
}>();
</script>

<template>
    <NuxtLink v-bind="props" class="text-secondary inline-flex flex-row gap-2 items-center border-b-2 border-dashed border-secondary hover:text-primary duration-200">
        <slot></slot>
    </NuxtLink>
</template>