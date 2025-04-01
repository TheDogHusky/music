<script setup lang="ts">
import type { NuxtButtonLinkProps } from "./button.types";
import { useButtonVariants } from "~/utils/functions";

const props = defineProps<NuxtButtonLinkProps>();
const buttonClasses = useButtonVariants(props);
</script>

<template>
    <NuxtLink :to="props.to" :class="buttonClasses">
     <slot></slot>
    </NuxtLink>
</template>