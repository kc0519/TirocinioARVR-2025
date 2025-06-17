<template>
    <div class="abilities">
        <div v-for="(ability, index) in abilities"
             :key="index"
             class="ability"
             :style="{ backgroundImage: `url(${ability.image})` }"
             @mouseenter="handleMouseEnter(`ability${index + 1}`, $event)"
             @mouseleave="handleMouseLeave">
        </div>
    </div>
</template>

<script lang="ts" setup>
    interface Ability {
        image: string
        name?: string
        description?: string
    }

    interface Props {
        abilities?: Ability[]
        inventoryItems?: unknown[] // This will affect abilities based on your game logic
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const props = withDefaults(defineProps<Props>(), {
        abilities: () => [
            { image: "./img/ability1.png" },
            { image: "./img/ability2.png" },
            { image: "./img/ability3.png" }
        ],
        inventoryItems: () => []
    });

    const emit = defineEmits<{
        mouseenter: [elementName: string, event: MouseEvent]
        mouseleave: []
    }>();

    const handleMouseEnter = (elementName: string, event: MouseEvent) =>
    {
        emit("mouseenter", elementName, event);
    };

    const handleMouseLeave = () =>
    {
        emit("mouseleave");
    };

// TODO: Implement logic to modify abilities based on inventory items
// const computedAbilities = computed(() => {
//   // Logic to modify abilities based on props.inventoryItems
//   return props.abilities
// })
</script>

<style scoped>
.abilities {
    grid-column: weapons / character;
    grid-row: start / abilities;
    display: flex;
}

.ability {
    width: 33%;
    aspect-ratio: 1;
    background-size: 85%;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    position: relative;
}
</style>