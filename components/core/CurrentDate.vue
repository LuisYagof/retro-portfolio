
<script setup lang="ts">
// HOOKS
onMounted(() => {
    setDate()
})

// DATA
const time = ref('')
const date = ref('')

// METHODS
function setDate(): string {
    const today = new Date()

    const formatedDate = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(today)

    time.value = formatedDate.split(',')[1]
    date.value = formatedDate.split(',')[0]

    setTimeout(() => {
        setDate()
    }, 60000)

    return formatedDate
}
</script>

<template>
    <div class="date-wrapper">
        <span class="date">{{ time }}</span>
        <span class="date">{{ date }}</span>
    </div>
</template>
        
<style scoped>
.date-wrapper {
    display: flex;
    flex-direction: column;
    text-align: center;

    & .date {
        font-size: 1rem;
        font-weight: 400;
    }
}

@media (max-width: 556px) {
    .date-wrapper {
        & .date {
            font-size: 0.6rem;
        }
    }
}
</style>
