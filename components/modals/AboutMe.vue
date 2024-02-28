<script setup lang="ts">
// EMITS
const emits = defineEmits({
    closeModal() {
        return true
    },
})
</script>

<template>
    <CoreAppModal @closeModal="emits('closeModal')"
        :title="'About me'">
        <div class="about-me-content">
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit molestias expedita ipsam reiciendis
                quas provident reprehenderit obcaecati commodi tenetur quidem quod illum. Minus enim veniam ullam ratione
                sint deserunt.
            </span>
            <br>
            <br>
            <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, velit molestias expedita ipsam reiciendis
                quas provident reprehenderit obcaecati commodi tenetur quidem quod illum. Minus enim veniam ullam ratione
                sint deserunt.
            </span>
        </div>
    </CoreAppModal>
</template>

<style scoped>
.about-me-content {
    padding: 0 2rem;
}
</style>
