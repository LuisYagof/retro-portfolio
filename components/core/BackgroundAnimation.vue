<template>
    <div class="background"></div>
</template>

<style scoped>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.background {
    --size: 250px;
    --speed: 20s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);

    position: absolute;
    z-index: -1;
    left: 35vw;
    top: 11vh;

    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 720px) {
    .background {
        --size: 500px;
    }
}
</style>