<script setup lang="ts">
// PROPS
const props = defineProps<{
    uniqueId: string;
    isDisabled?: boolean;
    previousValue?: boolean;
}>()

// EMITS
const emits = defineEmits({
    toggle(value: boolean) {
        return value
    },
})

// DATA
const isChecked = ref(props.previousValue)

// LIFECYCLE
onUpdated(() => {
    if (props.previousValue !== undefined && props.previousValue !== isChecked.value)
        isChecked.value = props.previousValue
})

// FUNCTIONS
function onInputChange(e: MouseEvent) {
    if (!props.isDisabled) {
        const target = e.target as HTMLInputElement
        const newValue = target.checked
        isChecked.value = newValue
        emits('toggle', newValue)
    }
}
</script>

<template>
    <div class="toggle-wrapper">
        <div class="input-wrap">
            <input :id="uniqueId"
                type="checkbox"
                v-model="isChecked"
                @click="onInputChange" />
            <label :for="uniqueId">

                <slot name="iconLeft" />
                <slot name="iconRight" />
            </label>
        </div>
    </div>
</template>

<style scoped>
.toggle-wrapper {
    label {
        display: inline-block;
        position: relative;
        height: 44px;
        width: 80px;
        background-color: var(--c-grey-2);

        cursor: pointer;
        font-size: 0;
        color: transparent;
        border-radius: 22px;
    }

    label:after {
        content: "";
        display: block;
        height: 35px;
        width: 35px;
        position: absolute;
        top: 4px;
        right: 38px;
        border-radius: 50%;
        background-color: var(--c-night-sky);
        box-shadow: 2px 0px 0px rgba(0, 0, 0, 0.15);
    }

    input:checked+label {
        background-color: var(--c-grey-3);
    }

    input:checked+label:after {
        right: 7px;
        background-color: var(--c-grey-1);
        box-shadow: -2px 0px 0px rgba(0, 0, 0, 0.1);
    }

    input {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        bottom: 0;
    }

    /**************
    ** ANIMATION **
    **************/

    label {
        transition: background-color 500ms ease;

        &:after {
            transition: right 500ms ease, background-color 500ms ease,
                box-shadow 500ms ease;
        }
    }
}
</style>