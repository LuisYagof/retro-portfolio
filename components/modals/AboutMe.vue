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
                Hello everyone! I'm Luis Yago Fernández — web developer 🔮
            </span>
            <br>
            <br>
            <span>
                I've been creating digital products for companies such as Repsol or Ab InBev for several years now. In this
                experience, I've actively participated in the functional design process, frontend architecture setup and
                development, code maintenance and testing... among many other things!💻 I enjoy being in the midst of
                the
                dialog between frontend, design and backend teams 🤸‍♂️
            </span>
            <br>
            <br>
            <span>
                Throughought this time, I've utilized core frontend technologies such as Vue, React or Angular (always with
                TypeScript! 😉). I particularly enjoy these new hybrid frameworks like NextJS, Nuxt or SvelteKit.
                Additionally, I've dabbled in mobile app development with React Native, Expo or Kotlin. I'm also interested
                in learning some more backend development with Node and —why not!— when I find the time for it, some new
                language such as GO or Python 🐍
            </span>
            <br>
            <br>
            <span>
                I find joy in keeping up with the efervescent JavaScript ecosystem 💛 and I'm very into retro-futuristic
                design! So those
                were the two main reasons to build this website: to play around with Nuxt, Azure, GitHub actions and dabble
                a bit into vintage
                design 👾
            </span>
        </div>
    </CoreAppModal>
</template>

<style scoped>
.about-me-content {
    padding: 0 2rem;
}
</style>
