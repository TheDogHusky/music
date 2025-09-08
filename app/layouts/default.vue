<script setup lang="ts">
const path = ref(useRoute().path);

watch(() => useRoute().path, (newPath) => {
    path.value = newPath;
});
</script>

<template>
    <div>
        <Header />
        <slot />
        <Footer v-if="path !== '/'" />
    </div>
</template>