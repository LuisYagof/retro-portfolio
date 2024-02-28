<script setup>
const props = defineProps({
    error: Object,
})

const message = computed(() => String(props.error?.message || ''))
const is404 = computed(() => props.error?.statusCode === 404 || message.value?.includes('404'))
const isDev = process.dev

function handleError() {
    return clearError({ redirect: '/' })
}
</script>

<template>
    <NuxtLayout>
        <CoreBackgroundAnimation />
            <div class="error-wrapper">
                <h1>
                    {{ is404 ? 'This page could not be found' : 'An error occurred' }}
                </h1>
                <span>
                    Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                </span>
                <pre v-if="isDev">{{ error }}</pre>
                <button @click="handleError">
                    Go Back
                </button>
            </div>
    </NuxtLayout>
</template>

<style>
.error-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;

    & h1 {
        font-size: 2rem;
    }
}
</style>