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
        :title="'My GitHub'">
        <div class="github-content">
            <span>
                If you want to check out my personal GitHub, you can follow <a href="https://github.com/LuisYagof"
                    target="_blank">this link</a>
            </span>
        </div>
    </CoreAppModal>
</template>

<style scoped>
.github-content {
    padding: 0 2rem;
}
</style>
