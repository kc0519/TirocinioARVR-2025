<template>
    <div class="characterIcon" :style="characterStyle">
        <slot></slot> <!-- For special weapon component -->
    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";

    interface Props {
        characterImage?: string
        selectedCharacter?: string
    }

    const props = withDefaults(defineProps<Props>(), {
        characterImage: "",
        selectedCharacter: ""
    });

    const characterStyle = computed(() =>
    {
        if (props.characterImage)
        {
            return { backgroundImage: `url(${props.characterImage})` };
        }

        // Default placeholder
        return { backgroundImage: "url(./img/characterIcon.png)" };
    });
</script>

<style scoped>
.characterIcon {
    grid-column: weapons / character;
    grid-row: abilities / character;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
</style>