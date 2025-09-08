<script setup lang="ts">
import type { ButtonLinkProps } from "./button.types";

const props = defineProps<ButtonLinkProps>();
</script>

<template>
    <NuxtLink
        v-bind="props"
        class="text-slate-100 text-xl border-none hover:text-slate-300 duration-200 after:content-[''] after:block after:w-0 after:h-[1px] after:bg-slate-300 after:transition-all after:duration-300 hover:after:w-full"
    >
        <slot></slot>
    </NuxtLink>
</template>