<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
    error: Object as () => NuxtError
});

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
    <main class="h-screen flex flex-col gap-4 items-center justify-center bg-bunker-950 text-white p-4">
        <div>
            <h1 class="text-8xl cursor-default basic font-semibold">Error <span class="font-bold text-red-500 transition-colors duration-200 hover:text-primary">{{ props.error?.statusCode || 500 }}</span></h1>
            <h2 class="text-4xl font-semibold text-center text-red-100">Oops, an error occured!</h2>
        </div>
        <div>
            <p v-if="props.error?.statusCode === 404" class="text-xl text-center font-semibold">The page you are looking for might have been removed or is temporarily unavailable.</p>
            <p v-else class="text-xl text-center font-semibold">
                An unexpected error occurred. Please try again later.<br>
                Don't worry, it's probably not your fault!<br>
                If the issue persists, please contact me via the <NuxtStyledLink to="/contact">contact page</NuxtStyledLink>.
            </p>
        </div>
        <NuxtStyledLink class="text-xl" to="/">Go back to the homepage</NuxtStyledLink>
    </main>
</template>