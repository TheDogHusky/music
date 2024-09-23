<script setup lang="ts">
import type {ButtonLinkProps} from "./button.types";
import {twMerge} from "tailwind-merge";
import { useButtonVariants } from "~/utils/functions";

const props = defineProps<ButtonLinkProps>();
const buttonClasses = useButtonVariants(props);
</script>

<template>
  <a :class="buttonClasses" :href="props.href" :target="props.target">
    <slot></slot>
  </a>
</template>