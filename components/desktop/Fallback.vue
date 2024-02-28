<template>
    <div class="desktop-icon">
        <div class="img-wrapper">
            <img src="~/assets/icons/folder.svg"
                alt="folder image"
                draggable="false">
        </div>
        <span>Loading...</span>
    </div>
</template>

<style scoped>
.desktop-icon {
    cursor: grab;
    width: 4rem;
    position: absolute;

    & .img-wrapper {
        width: 4rem;
        height: 4rem;
    }

    & span {
        font-size: 0.8rem;
        font-weight: lighter;
    }
}
</style>