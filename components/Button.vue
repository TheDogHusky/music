<script setup lang="ts">
import type {ButtonProps} from "./button.types";
import {twMerge} from "tailwind-merge";

const props = defineProps<ButtonProps>();

const buttonClasses = computed(() => {
  const themeVariants: {[key: string]: string} = {
    primary: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-600 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 focus:ring-gray-600 text-white",
    warning: "bg-amber-600 hover:bg-amber-700 focus:ring-amber-600 text-white",
    danger: "bg-red-700 hover:bg-red-800 focus:ring-red-700 text-white",
    icon: "text-gray-300 h-10 w-10 text-xl p-2 flex flex-row items-center justify-center hover:bg-opacity-50",
  };

  const sizeVariants: {[key: string]: string} = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return twMerge(
      "rounded duration-200 outline-none focus:ring text-base font-semibold focus:ring-blue-500 focus:ring-opacity-50 bg-gray-800 bg-transparent hover:bg-gray-800 hover:bg-opacity-80",
      sizeVariants[props.size || "md"],
      themeVariants[props.variant],
      props.disabled ? "opacity-50 cursor-not-allowed" : ""
  );
});

</script>

<template>
  <button :class="buttonClasses" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>