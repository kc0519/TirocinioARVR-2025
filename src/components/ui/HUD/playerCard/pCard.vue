<template>
    <div class="playerCard">
        <InventoryButton :on-inventory-click="handleInventoryClick"
                         @mouseenter="handleMouseEnter"
                         @mouseleave="handleMouseLeave" />

        <WeaponContainer weapon-type="weapon1"
                         :weapon-image="weapons.primary"
                         @mouseenter="handleMouseEnter"
                         @mouseleave="handleMouseLeave" />

        <WeaponContainer weapon-type="weapon2"
                         :weapon-image="weapons.secondary"
                         @mouseenter="handleMouseEnter"
                         @mouseleave="handleMouseLeave" />

        <CharacterIcon :character-image="character.image"
                       :selected-character="character.name">
            <WeaponContainer weapon-type="specialItem"
                             :weapon-image="character.specialWeapon"
                             :character-type="character.name"
                             @mouseenter="handleMouseEnter"
                             @mouseleave="handleMouseLeave" />
        </CharacterIcon>

        <HealthBar :current-health="playerStats.currentHealth"
                   :max-health="playerStats.maxHealth"
                   @mouseenter="handleMouseEnter"
                   @mouseleave="handleMouseLeave" />

        <ExperienceBar :current-experience="playerStats.currentExperience"
                       :experience-to-next-level="playerStats.experienceToNextLevel"
                       @mouseenter="handleMouseEnter"
                       @mouseleave="handleMouseLeave" />

        <AbilitiesContainer :abilities="abilities"
                            :inventory-items="inventoryItems"
                            @mouseenter="handleMouseEnter"
                            @mouseleave="handleMouseLeave" />

        <!-- Hover tooltip -->
        <Teleport to="body">
            <div v-if="hoveredElement"
                 ref="tooltipElement"
                 class="hover-tooltip">
                {{ getHoverText(hoveredElement) }}
            </div>
        </Teleport>
    </div>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import InventoryButton from "./inventoryButton.vue";
    import WeaponContainer from "./weaponContainer.vue";
    import CharacterIcon from "./characterIcon.vue";
    import AbilitiesContainer from "./abilitiesContainer.vue";
    import HealthBar from "./healthBar.vue";
    import ExperienceBar from "./experienceBar.vue";

    interface Character {
        name: string
        image: string
        specialWeapon: string
    }

    interface Weapons {
        primary: string
        secondary: string
    }

    interface PlayerStats {
        currentHealth: number
        maxHealth: number
        currentExperience: number
        experienceToNextLevel: number
    }

    interface Ability {
        image: string
        name?: string
        description?: string
    }

    interface Props {
        character: Character
        weapons: Weapons
        playerStats: PlayerStats
        abilities: Ability[]
        inventoryItems: unknown[]
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const props = withDefaults(defineProps<Props>(), {
        character: () => ({
            name: "default",
            image: "./img/characterIcon.png",
            specialWeapon: "./img/weapon3.png"
        }),
        weapons: () => ({
            primary: "./img/weapon1.png",
            secondary: "./img/weapon2.png"
        }),
        playerStats: () => ({
            currentHealth: 100,
            maxHealth: 100,
            currentExperience: 50,
            experienceToNextLevel: 100
        }),
        abilities: () => [
            { image: "./img/ability1.png" },
            { image: "./img/ability2.png" },
            { image: "./img/ability3.png" }
        ],
        inventoryItems: () => []
    });

    const emit = defineEmits<{
        inventoryClick: []
    }>();

    const hoveredElement = ref<string | null>(null);
    const tooltipElement = ref<HTMLElement | null>(null);

    const handleInventoryClick = () =>
    {
        emit("inventoryClick");
    };

    const handleMouseEnter = (elementName: string, event: MouseEvent) =>
    {
        hoveredElement.value = elementName;
        // Position tooltip above the hovered element
        setTimeout(() =>
        {
            if (tooltipElement.value)
            {
                if (event.target)
                {
                    const rect = (event.target as Element).getBoundingClientRect();
                    tooltipElement.value.style.left = rect.left + rect.width / 2 + "px";
                    tooltipElement.value.style.top = rect.top - 10 + "px";
                }
            }
        }, 0);
    };

    const handleMouseLeave = () =>
    {
        hoveredElement.value = null;
    };

    const getHoverText = (elementName: string) =>
    {
        const hoverTexts = {
            inventory: "Inventory",
            weapon1: "Primary Weapon",
            weapon2: "Secondary Weapon",
            characterIcon: "Character",
            specialItem: "Special Item",
            hp: "Health Points",
            xp: "Experience Points",
            ability1: "Ability 1",
            ability2: "Ability 2",
            ability3: "Ability 3"
        };

        return hoverTexts[elementName as keyof typeof hoverTexts];
    };
</script>

<style scoped>
.playerCard {
    width: 33%;
    aspect-ratio: 1009/654;
    display: grid;
    grid-template-columns: [start] 21.5% [inventory] 21.5% [weapons] 37% [character] 10% [hp] 10% [xp];
    grid-template-rows: [start] 25% [abilities] 37.5% [weapon1] 37.5% [character];
    background-image: url('./img/playerCard.png');
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 0;
    right: 0;
    position: absolute;
    background-position: center;
    z-index: 1;
}

.hover-tooltip {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 14px;
    pointer-events: none;
    z-index: 1000;
    white-space: nowrap;
    transform: translate(-50%, -100%);
}
</style>