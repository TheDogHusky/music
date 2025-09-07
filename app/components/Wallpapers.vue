<script setup lang="ts">
const current = ref(0);
let interval: ReturnType<typeof setInterval>;

onMounted(() => {
    interval = setInterval(() => {
        current.value = (current.value + 1) % 5;
    }, 5000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="wallpapers">
        <div class="wallpaper" :class="{ active: current === 0 }">
            <NuxtImg src="/images/band_2025_music_festival_liffre.jpg" placeholder width="2560" height="1440" format="webp" alt="Music Festival 2025 in Liffré, France" />
        </div>
        <div class="wallpaper" :class="{ active: current === 1 }">
            <NuxtImg src="/images/band_2025_music_festival_liffre_2.jpg" width="2560" height="1440" format="webp" alt="Music Festival 2025 in Liffré, France" />
        </div>
        <div class="wallpaper" :class="{ active: current === 2 }">
            <NuxtImg src="/images/band_2025_music_festival_liffre_3.jpg" width="2560" height="1440" format="webp" alt="Music Festival 2025 in Liffré, France" />
        </div>
        <div class="wallpaper" :class="{ active: current === 3 }">
            <NuxtImg src="/images/band_2025_music_festival_liffre_4.jpg" width="2560" height="1440" format="webp" alt="Music Festival 2025 in Liffré, France" />
        </div>
        <div class="wallpaper" :class="{ active: current === 4 }">
            <NuxtImg src="/images/band_2025_music_festival_liffre_5.jpg" width="2560" height="1440" format="webp" alt="Music Festival 2025 in Liffré, France" />
        </div>
    </div>
</template>