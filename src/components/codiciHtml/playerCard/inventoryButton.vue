<template>
    <div class="inventory"
         @click="handleInventoryClick"
         @mouseenter="handleMouseEnter('inventory', $event)"
         @mouseleave="handleMouseLeave">
    </div>
</template>

<script lang="ts" setup>
    interface Props {
        onInventoryClick?: () => void
    }

    const props = withDefaults(defineProps<Props>(), {
        // eslint-disable-next-line no-console
        onInventoryClick: () => { console.log("Inventory clicked"); }
    });

    const emit = defineEmits<{
        mouseenter: [elementName: string, event: MouseEvent]
        mouseleave: []
    }>();

    const handleInventoryClick = () =>
    {
        props.onInventoryClick();
    };

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
.inventory {
    grid-column: start / inventory;
    grid-row: weapon1 / character;
    background-image: url('./img/inventory.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    cursor: pointer;
    position: relative;
}
</style>