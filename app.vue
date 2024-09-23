<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: "scroll-smooth"
  }
});
</script>

<template>
  <div class="flex flex-col">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </div>
</template>
