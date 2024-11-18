<script setup lang="ts">
const { isActive, toggleActive } = useNavStates();
</script>

<template>
  <button @click="toggleActive" :class="isActive ? 'navbar-collapse-btn active md:!hidden' : 'navbar-collapse-btn md:!hidden'">
    <span />
    <span />
    <span />
  </button>
</template>

<style scoped>
.navbar-collapse-btn {
  display: block;
  height: 32px;
  width: 32px;
  top: 8px;
  position: relative;
  cursor: pointer;
}

.navbar-collapse-btn > * {
  display: block;
  width: 32px;
  height: 2px;
  background-color: var(--color-secondary);
  position: absolute;
  opacity: 1;
  transition: transform 0.5s ease, opacity 0.25s ease, top 0.5s ease, background-color 0.5s ease;
}

.navbar-collapse-btn.active > * {
  background-color: var(--color-primary);
}

.navbar-collapse-btn > span:nth-of-type(1) {
  top: 0;
}

.navbar-collapse-btn > span:nth-of-type(2) {
  top: 8px;
}

.navbar-collapse-btn > span:nth-of-type(3) {
  top: 16px;
}

.navbar-collapse-btn.active > span:nth-of-type(1) {
  transform: rotate(45deg);
  top: 8px;
}

.navbar-collapse-btn.active > span:nth-of-type(2) {
  opacity: 0;
}

.navbar-collapse-btn.active > span:nth-of-type(3) {
  transform: rotate(-45deg);
  top: 8px;
}
</style>