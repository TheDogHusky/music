<script setup lang="ts">
const path = ref(useRoute().path);

watch(() => useRoute().path, (newPath) => {
    path.value = newPath;
});
</script>

<template>
    <Header />
    <slot />
    <Footer v-if="path !== '/'" />
</template>