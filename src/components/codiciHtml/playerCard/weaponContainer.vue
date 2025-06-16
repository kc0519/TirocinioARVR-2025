<template>
    <div :class="weaponClass"
         :style="weaponStyle"
         @mouseenter="handleMouseEnter(weaponType, $event)"
         @mouseleave="handleMouseLeave">
    </div>
</template>

<script lang="ts" setup>
    import { computed } from "vue";

    interface Props {
        weaponType: "weapon1" | "weapon2" | "specialItem"
        weaponImage?: string
        characterType?: string // for special weapon
    }

    const props = withDefaults(defineProps<Props>(), {
        weaponImage: "",
        characterType: ""
    });

    const emit = defineEmits<{
        mouseenter: [elementName: string, event: MouseEvent]
        mouseleave: []
    }>();

    const weaponClass = computed(() =>
    {
        return props.weaponType === "specialItem" ? "specialItem" : props.weaponType;
    });

    const weaponStyle = computed(() =>
    {
        if (props.weaponImage)
        {
            return { backgroundImage: `url(${props.weaponImage})` };
        }

        // Default placeholder images
        const defaultImages = {
            weapon1: "./img/weapon1.png",
            weapon2: "./img/weapon2.png",
            specialItem: "./img/weapon3.png"
        };

        return { backgroundImage: `url(${defaultImages[props.weaponType]})` };
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
.weapon1 {
    grid-column: inventory / weapons;
    grid-row: abilities / weapon1;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: bottom;
    cursor: pointer;
    position: relative;
}

.weapon2 {
    grid-column: inventory / weapons;
    grid-row: weapon1 / character;
    background-size: contain;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    cursor: pointer;
    position: relative;
}

.specialItem {
    width: 30%;
    aspect-ratio: 1;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top right;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
}
</style>