<script setup lang='ts'>

</script>
    
<template>
    <main>
        <CoreBackgroundAnimation />
        <div class="title">
            <h1>Luis Yago Fernández</h1>
            <h2>
                &lt; Web Developer >
            </h2>
        </div>

        <ClientOnly>
            <div>
                <DesktopAboutMe :iconName="'About me'">
                </DesktopAboutMe>
            </div>

            <template #fallback>
                <DesktopFallback class="fallback" />
            </template>
        </ClientOnly>


        <ClientOnly>
            <div>
                <DesktopGithub :iconName="'GitHub'">
                </DesktopGithub>
            </div>

            <template #fallback>
                <DesktopFallback class="fallback" />
            </template>
        </ClientOnly>


        <CoreFooter />
    </main>
</template>

<style scoped>
main {
    display: grid;
    align-content: center;
    height: calc(100dvh - 4rem);
    width: 100dvw;

    & .title {
        text-align: center;
        gap: 1rem;

        h1 {
            font-size: 3rem;
            font-weight: 500;
            color: var(--c-white-mild)
        }

        h2 {
            font-size: 1.5rem;
            font-weight: 300;
            color: var(--c-night-sky)
        }
    }

    & .fallback {
        position: absolute;
        left: 1rem;
        top: 1rem;
        width: 4rem;
        height: 4rem;
    }
}
</style>