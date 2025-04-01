<script setup lang="ts">
const props = defineProps<{
    href?: string;
    disabled?: boolean;
}>();
</script>

<template>
    <a v-bind="props" class="animate-bounce text-4xl rounded-full bg-transparent hover:bg-secondary hover:text-neutral-950 duration-200 focus:ring focus:ring-secondary focus:ring-opacity-50 m-0 p-0 flex justify-center items-center border-2 border-secondary text-secondary bottom-4 absolute">
        <Icon name="nf-oct-arrow_down" />
    </a>
</template>