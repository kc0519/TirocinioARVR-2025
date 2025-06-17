<template>
    <div class="hp"
         @mouseenter="handleMouseEnter('hp', $event)"
         @mouseleave="handleMouseLeave">
        <div class="hp-fill" :style="healthFillStyle"></div>
    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";

    interface Props {
        currentHealth: number
        maxHealth: number
    }

    const props = withDefaults(defineProps<Props>(), {
        currentHealth: 100,
        maxHealth: 100
    });

    const emit = defineEmits<{
        mouseenter: [elementName: string, event: MouseEvent]
        mouseleave: []
    }>();

    const healthPercentage = computed(() =>
    {
        return Math.max(0, Math.min(100, (props.currentHealth / props.maxHealth) * 100));
    });

    const healthFillStyle = computed(() =>
    {
        const percentage = healthPercentage.value;

        // Create gradient from green to red based on health
        let color = "green";
        if (percentage < 30)
        {
            color = "red";
        }
        else if (percentage < 60)
        {
            color = "orange";
        }

        return {
            height: `${percentage}%`,
            backgroundColor: color,
            transition: "height 0.3s ease, background-color 0.3s ease"
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
.hp {
    width: 60%;
    aspect-ratio: 54 / 538;
    grid-column: character / hp;
    grid-row: start / character;
    background-color: #333;
    border: 2px solid #666;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    align-self: center;
    margin: 0 auto;
}

.hp-fill {
    width: 100%;
    border-radius: 2px;
    transform-origin: bottom;
}
</style>