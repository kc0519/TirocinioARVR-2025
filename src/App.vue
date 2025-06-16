<script lang="ts" setup>
    import { ref } from "vue";
    import PlayerWheel from "./components/codiciHtml/playerWheel/playerWheel.vue";
    import PCard from "./components/codiciHtml/playerCard/pCard.vue";
    import InventoryOverlay from "./components/codiciHtml/cards/inventoryOverlay.vue";

    // Dummy data for required props
    import type { Character, Weapons, PlayerStats, Ability } from "@/types"; // adjust path as needed

    const character: Character = {
        name: "Test Character",
        image: "./img/characterIcon.png",
        specialWeapon: "./img/weapon3.png"
    };
    const weapons: Weapons = {
        primary: "./img/weapon1.png",
        secondary: "./img/weapon2.png"
    };
    const playerStats: PlayerStats = {
        currentHealth: 80,
        maxHealth: 100,
        currentExperience: 70,
        experienceToNextLevel: 100
    };
    const abilities: Ability[] = [
        { image: "./img/ability1.png", name: "Ability 1", description: "First ability" },
        { image: "./img/ability2.png", name: "Ability 2", description: "Second ability" },
        { image: "./img/ability3.png", name: "Ability 3", description: "Third ability" }
    ];
    const inventoryItems: unknown[] = [];

    // Reactive state for inventory overlay
    const isInventoryOpen = ref(false);

    function showInventory()
    {
        // Toggle the inventory visibility
        isInventoryOpen.value = !isInventoryOpen.value;
    }
</script>

<!-- eslint-disable vue/v-on-event-hyphenation -->
<template>
    <PlayerWheel />
    <PCard :character="character"
           :weapons="weapons"
           :player-stats="playerStats"
           :abilities="abilities"
           :inventory-items="inventoryItems"
           @inventoryClick="showInventory" />

    <!-- Inventory Display - persistent UI element -->
    <InventoryOverlay v-if="isInventoryOpen" />
</template>

<style>
    body{
        height: 100vh;
        width: 100vw;
        margin: 0;
        box-shadow: 0;
    }
</style>

<style lang="scss">
    @use "@/assets/scss/index" as *;
</style>