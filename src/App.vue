<!-- eslint-disable no-multiple-empty-lines -->
<script lang="ts" setup>
    import { ref } from "vue";
    import PlayerWheel from "./components/codiciHtml/playerWheel/playerWheel.vue";
    import PCard from "./components/codiciHtml/playerCard/pCard.vue";
    import InventoryOverlay from "./components/codiciHtml/cards/inventoryOverlay.vue";
    import MiniMappa from "@/components/game/MiniMappa.vue";
    import ActionWheel from "@/components/game/ActionWheel.vue";
    import GameMenuButtons from "@/components/game/GameMenuButtons.vue";
    import GameButtons from "@/components/game/GameButtons.vue";
    import ZombieWindow from "@/components/game/ZombieWindow.vue";

    // Dummy data for required props
    import type { Character, Weapons, PlayerStats, Ability } from "./types.ts";

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








    const actionWheelRef = ref();
    const gameMenuButtons = ref(false);
    const showZombieOverlay = ref(false);

    function onBackgroundClick(e: MouseEvent)
    {
        // Se il menu è aperto, non fare nulla (non chiudere il menu e non aprire la ruota)
        if (gameMenuButtons.value || showZombieOverlay.value)
        {
            return;
        }
        if (actionWheelRef.value && actionWheelRef.value.showWheel)
        {
            actionWheelRef.value.showWheel(e.clientX, e.clientY);
        }
    }

    function toggleMenu()
    {
        gameMenuButtons.value = !gameMenuButtons.value;
    }

    function openZombieOverlay()
    {
        showZombieOverlay.value = true;
    }
    function closeZombieOverlay()
    {
        showZombieOverlay.value = false;
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

    <InventoryOverlay v-if="isInventoryOpen" />

    <div class="background"
         :class="{ 'overlay-active': gameMenuButtons || showZombieOverlay }"
         :style="gameMenuButtons || showZombieOverlay ? 'overlay-active' : ''"
         @click="onBackgroundClick">
    </div>
    <MiniMappa class="map" />
    <ActionWheel ref="actionWheelRef" class="actionWheel" />
    <GameMenuButtons v-if="gameMenuButtons"
                     class="gameMenuButtons"
                     @close="gameMenuButtons = false" />
    <GameButtons class="buttonMenu" @click="toggleMenu">
        <span class="material-symbols-outlined">menu</span>
    </GameButtons>
    <GameButtons class="buttonZombie" @click="openZombieOverlay">
        <img src="@/components/game/ZombieIcon.png"
             alt="Zombie"
             class="zombie-icon" />
    </GameButtons>
    <ZombieWindow v-if="showZombieOverlay"
                  class="zombieWindow"
                  @close="closeZombieOverlay" />
</template>

<style>
    body{
        height: 100vh;
        width: 100vw;
        margin: 0;
        box-shadow: 0;
    }

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }
    .map {
        position: fixed;
        bottom: 1%;
        left: 1%;
    }
    .card {
        position: absolute;
        bottom: 7%;
        left: 7%;
        width: 0;
        height: 0;
    }
    .buttonInfo {
        position: absolute;
        bottom: 35%;
        right: 30%;
    }
    .gameMenuButtons {
        pointer-events: auto;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 3000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .buttonMenu{
        position: fixed;
        top: 10%;
        right: 5%;
        background-size: cover;
        background-position: center;
    }
    .buttonZombie{
        position: fixed;
        top: 10%;
        right: 12%;
        background-size: cover;
        background-position: center;
    }
    .overlay-active {
        pointer-events: auto;
        background: rgba(0, 0, 0, 0.2);
        z-index: 2000;
    }
    .zombieWindow {
        pointer-events: auto;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 3000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .material-symbols-outlined {
        font-variation-settings:
            'FILL' 0,
            'wght' 400,
            'GRAD' 0,
            'opsz' 100;
    }
    .zombie-icon {
        aspect-ratio: 1;
        height: 5%;
        width: auto;
        object-fit: contain;
        pointer-events: none;
    }
</style>

<style lang="scss">
    @use "@/assets/scss/index" as *;
</style>