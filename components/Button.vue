<script setup lang="ts">
import type {ButtonProps} from "./button.types";
import {twMerge} from "tailwind-merge";
import { useButtonVariants } from "~/utils/functions";

const props = defineProps<ButtonProps>();
const buttonClasses = useButtonVariants(props);
</script>

<template>
  <button :class="buttonClasses" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>