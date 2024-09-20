<script setup lang="ts">
import {twMerge} from 'tailwind-merge';
const props = defineProps<{
  hover?: string;
  color?: string;
  name: string;
}>();

const mergedClass = computed(() => {
  return `nf ${props.name} ` + twMerge(`${props.color ? props.color : ''} ${props.hover ? `hover:${props.hover}` : ''}`);
});
</script>

<template>
  <i :class="mergedClass"></i>
</template>