<script setup lang='ts'>
// PROPS
const props = defineProps({
    iconName: {
        type: String,
        required: false
    }
})

// DATA
const modalIsOpen = ref(false)

// FUNCTIONS
function onDoubleClick() {
    modalIsOpen.value = true
}

</script>

<template>
    <div v-drag-drop
        @dblclick="onDoubleClick"
        draggable="true"
        class="desktop-icon">
        <div class="img-wrapper">
            <img src="~/assets/icons/github.svg"
                alt="github image"
                draggable="false">
        </div>
        <span>{{ props.iconName }}</span>
    </div>

    <ModalsGithub v-if="modalIsOpen"
        @close-modal="modalIsOpen = false" />
</template>

<style scoped>
.desktop-icon {
    cursor: grab;
    width: 4rem;
    position: absolute;
    left: 1rem;
    top: 8rem;
    z-index: 1;
    text-align: center;
    /* transition: all 0.25s ease-out; */

    & .img-wrapper {
        width: 4rem;
        height: 4rem;

        display: flex;
        flex-direction: column;
    }

    & span {
        font-size: 0.8rem;
        font-weight: lighter;
    }
}
</style>