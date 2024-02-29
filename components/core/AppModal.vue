<script setup lang="ts">
// PROPS
defineProps({
    // modalName: {
    //     type: String,
    //     require: true,
    // },
    title: {
        type: String,
        require: true,
    },
    // text: {
    //     type: String,
    //     require: true,
    // }
})

// EMITS
const emits = defineEmits({
    closeModal() {
        return true
    },
})
</script>

<template>
    <div class="modal-overlay">
        <div class="modal">
            <div class="title">
                <h1 class="title-text">
                    {{ title }}
                </h1>
                <div class="close-wrapper">
                    <span class="close-icon"
                        @click="emits('closeModal')">✖</span>
                </div>
            </div>
            <!-- <span v-if="text"
                class="modal-text">
                {{ text }}
            </span> -->
            <slot />
        </div>
    </div>
</template>


<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--c-divider-dark-2);
    color: var(--c-white-soft);
    font-family: 'KodeMono';
    font-size: 14px;
    z-index: 99;

    .modal {
        background-color: var(--c-night-sky);
        min-width: 45rem;
        max-width: 50rem;
        max-height: 95dvh;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        padding-bottom: 2rem;

        .title {
            display: flex;
            align-items: flex-start;
            width: 100%;
            justify-content: space-between;
            padding: 0.5rem;
            border-bottom: 1px solid var(--c-white-mild);

            .title-text {
                font-size: 24px;
                line-height: 32px;
                font-family: 'KodeMono';
                width: 98%;
            }

            .close-wrapper {
                border: 1px solid var(--c-white-mild);
                width: 2rem;
                text-align: center;

                .close-icon {
                    cursor: pointer;
                    font-size: 1.5rem;
                    line-height: 1.95rem;
                }
            }
        }

        /* .modal-text {
            font-size: 16px;
            margin-top: 1rem;
        } */
    }
}


@media (max-width: 556px) {
    .modal-overlay {
        & .modal {
            max-width: 100dvw;
            min-width: 100dvw;
            max-height: 75dvh;
            overflow-y: scroll;
        }
    }
}
</style>
