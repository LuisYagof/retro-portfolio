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
    --size: 280px;
    --speed: 13s;
    --easing: cubic-bezier(0.7, 0.3, 0.3, 0.7);

    position: absolute;
    z-index: -1;
    left: 30vw;
    top: 25vh;

    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

@media (min-width: 556px) {
    .background {
        --size: 350px;
        left: 26vw;
        top: 17vh;
    }
}

@media (min-width: 720px) {
    .background {
        --size: 460px;
        left: 25vw;
        top: 16vh;
    }
}

@media (min-width: 1024px) {
    .background {
        --size: 500px;
        left: 35vw;
        top: 25vh;
    }
}
</style>