<script setup lang='ts'>
// COMPOSABLES
const colorMode = useColorMode()

// DATA
const isNightTheme = ref(colorMode.preference !== 'light-mode')

// FUNCTIONS
function toggleTheme(newValue: boolean) {
    isNightTheme.value = newValue
    colorMode.value = newValue ? 'dark' : 'light'
}
</script>

<template>
    <footer>
        <ClientOnly>
            <CoreToggleButton :unique-id="'theme-switch'"
                :previous-value="isNightTheme"
                @toggle="toggleTheme">

                <template #iconLeft>
                    <img src="~/assets/icons/themes/sun.svg"
                        class="icon left" />
                </template>

                <template #iconRight>
                    <img src="~/assets/icons/themes/moon.svg"
                        class="icon right" />
                </template>
            </CoreToggleButton>
        </ClientOnly>

        <span>
            developed by Luis Yago Fernández
        </span>

        <CoreCurrentDate />
    </footer>
</template>

<style  scoped>
footer {
    width: 100vw;
    height: 4rem;
    background: var(--c-bg);
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;


    .icon {
        width: 35px;
        height: 44px;

        &.left {
            position: absolute;
            left: 3px;
        }

        &.right {
            position: absolute;
            right: 3px;
        }
    }
}
</style>