<template>
    <div class="xp"
         @mouseenter="handleMouseEnter('xp', $event)"
         @mouseleave="handleMouseLeave">
        <div class="xp-fill" :style="experienceFillStyle"></div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";

    interface Props {
        currentExperience: number
        experienceToNextLevel: number
    }

    const props = withDefaults(defineProps<Props>(), {
        currentExperience: 0,
        experienceToNextLevel: 100
    });

    const emit = defineEmits<{
        mouseenter: [elementName: string, event: MouseEvent]
        mouseleave: []
    }>();

    const experiencePercentage = computed(() =>
    {
        return Math.max(0, Math.min(100, (props.currentExperience / props.experienceToNextLevel) * 100));
    });

    const experienceFillStyle = computed(() =>
    {
        return {
            height: `${experiencePercentage.value}%`,
            backgroundColor: "#4169E1", // Royal blue color for XP
            transition: "width 0.3s ease"
        };
    });

    const handleMouseEnter = (elementName: string, event: MouseEvent) =>
    {
        emit("mouseenter", elementName, event);
    };

    const handleMouseLeave = () =>
    {
        emit("mouseleave");
    };
</script>

<style scoped>
.xp {
    width: 60%;
    aspect-ratio: 54 / 538;
    grid-column: hp / xp;
    grid-row: start / character;
    background-color: #333;
    border: 2px solid #666;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    align-self: center;
}

.xp-fill {
    width: 100%;
    border-radius: 2px;
    transform-origin: bottom;
}
</style>