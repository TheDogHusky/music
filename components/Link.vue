<script setup lang="ts">
const props = defineProps<{
  href?: string;
  disabled?: boolean;
  target?: string;
}>();
</script>

<template>
  <a v-bind="props" class="text-secondary border-b-2 border-dashed border-secondary hover:text-primary duration-200">
    <slot></slot>
  </a>
</template>