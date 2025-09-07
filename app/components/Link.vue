<script setup lang="ts">
const props = defineProps<{
    href?: string;
    disabled?: boolean;
    target?: string;
}>();
</script>

<template>
    <a v-bind="props" class="border-none slide-animation">
        <slot></slot>
    </a>
</template>