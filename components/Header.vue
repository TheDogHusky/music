<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import NavCollapseButton from "~/components/NavCollapseButton.vue";

const { isActive, toggleActive, setActive } = useNavStates();
const itemsClass = twMerge("flex md:border-0 h-12 max-md:w-full overflow-hidden flex-row items-center gap-6 px-2 navitems max-md:h-auto max-md:invisible max-md:flex-col max-md:justify-center max-md:gap-4");

const classes = computed(() => {
    return twMerge(
        itemsClass,
        isActive.value ? "show !visible" : ""
    );
});

const router = useRouter();
router.afterEach(() => {
    setActive(false);
});
</script>

<template>
    <nav class="flex flex-row flex-wrap justify-between items-center bg-woodsmoke-900 p-4">
        <NuxtLink to="/" class="flex flex-row items-center gap-4">
            <NuxtImg src="/logo.webp" format="webp" alt="logo" class="h-12 w-12" />
            <h2 class="cursor-default text-primary border-b-2 border-secondary font-medium border-dashed text-2xl hover:text-secondary duration-200">Adam Billard</h2>
        </NuxtLink>
        <NavCollapseButton />
        <div :class="classes">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/songs">Songs</NavLink>
        </div>
    </nav>
</template>

<style scoped>
.navitems {
    transition: max-height 0.5s ease, visibility 0.5s;
    max-height: 0;
}

@media screen and (min-width: 768px) {
    .navitems {
        max-height: fit-content;
    }
}

.navitems.show {
    max-height: 16rem !important;
}
</style>