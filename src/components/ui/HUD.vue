<script setup lang="ts">
    import { ref } from "vue";
    import PlayerWheel from "@/components/ui/HUD/playerWheel/playerWheel.vue";
    import PCard from "@/components/ui/HUD/playerCard/pCard.vue";
    import InventoryOverlay from "./HUD/inventoryOverlay.vue";
    import MiniMappa from "@/components/ui/HUD/MiniMappa.vue";
    import ActionWheel from "@/components/ui/HUD/ActionWheel.vue";
    import GameMenuButtons from "@/components/ui/HUD/GameMenuButtons.vue";
    import GameButtons from "@/components/ui/HUD/GameButtons.vue";
    import InfoWindow from "@/components/ui/HUD/InfoWindow.vue";

    // Dummy data for required props
    import type { Character, Weapons, PlayerStats, Ability } from "../../types.ts";

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
        // Usa direttamente le coordinate della viewport
        const x = e.clientX;
        const y = e.clientY;
        if (actionWheelRef.value && actionWheelRef.value.showWheel)
        {
            actionWheelRef.value.showWheel(x, y);
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

<template>
    <PlayerWheel />
    <PCard :character="character"
           :weapons="weapons"
           :player-stats="playerStats"
           :abilities="abilities"
           :inventory-items="inventoryItems"
           @inventory-click="showInventory" />

    <!-- Wrap InventoryOverlay with Transition component -->
    <Transition name="inventory">
        <InventoryOverlay v-if="isInventoryOpen" />
    </Transition>

    <div class="background"
         :class="{ 'overlay-active': gameMenuButtons || showZombieOverlay }"
         @click="onBackgroundClick">
    </div>
    <MiniMappa class="map" />
    <ActionWheel ref="actionWheelRef" class="actionWheel" />
    <GameMenuButtons v-if="gameMenuButtons"
                     class="gameMenuButtons"
                     @close="gameMenuButtons = false" />
    <GameButtons class="buttonMenu" @click="toggleMenu">
        <span class="material-symbols-outlined addB">menu</span>
    </GameButtons>
    <GameButtons class="buttonZombie" @click="openZombieOverlay">
        <img src="../../../public/icons/ZombieIcon.png"
             alt="Zombie"
             class="zombie-icon" />
    </GameButtons>
    <InfoWindow v-if="showZombieOverlay"
                class="zombieWindow"
                @close="closeZombieOverlay" />
</template>

<style lang="scss" scoped>

    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .map {
        position: absolute;
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
        z-index: 6000;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .buttonMenu{
        position: absolute;
        top: 3%;
        right: 2%;
        background-size: cover;
        background-position: center;
    }

    .buttonZombie{
        position: absolute;
        top: 3%;
        right: 8%;
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
        height: 90%;
        width: auto;
        object-fit: contain;
        pointer-events: none;
    }

    /* Inventory animation */
    .inventory-enter-active,
    .inventory-leave-active {
        transition: transform 0.4s ease-out, opacity 0.3s ease-out;
    }

    .inventory-enter-from {
        transform: translateX(-50%) translateY(100%);
        opacity: 0;
    }

    .inventory-leave-to {
        transform: translateX(-50%) translateY(100%);
        opacity: 0;
    }

    .inventory-enter-to,
    .inventory-leave-from {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
    }
    .addB{
    width: 100%;
    aspect-ratio: 1;
    text-align: center;
    align-content: center;
    font-size: 184%;
    }
</style>

<style lang="scss">
    @use "@/assets/scss/index" as *;
</style>