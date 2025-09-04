<script setup lang="ts">
import NavCollapseButton from "~/components/NavCollapseButton.vue";

const { setActive, isActive } = useNavStates();

const router = useRouter();
router.afterEach(() => {
    setActive(false);
});
</script>

<template>
    <nav class="flex flex-row justify-center gap-10 items-center p-4 fixed top-0 left-0 w-full z-50 font-cinzel" :class="{ 'expanded': isActive }">
        <NuxtLink to="/" class="flex flex-row items-center gap-4">
            <h2 class="cursor-default text-slate-100 font-medium text-2xl hover:text-slate-300 duration-200">Adam Billard</h2>
        </NuxtLink>
        <NavSeparator />
        <NavCollapseButton />
        <div class="nav-items">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/songs">Songs</NavLink>
        </div>
    </nav>
</template>