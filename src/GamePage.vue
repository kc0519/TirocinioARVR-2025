<script setup lang="ts">
    import { ref } from "vue";
    import MiniMappa from "@/components/game/MiniMappa.vue";
    import CardInventory from "@/components/game/CardInventory.vue";
    import ActionWheel from "@/components/game/ActionWheel.vue";
    import GameMenuButtons from "@/components/game/GameMenuButtons.vue";
    import GameButtons from "@/components/game/GameButtons.vue";
    import ZombieWindow from "@/components/game/ZombieWindow.vue";

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

<template>
    <div>
        <div class="background"
             :class="{ 'overlay-active': gameMenuButtons || showZombieOverlay }"
             :style="gameMenuButtons || showZombieOverlay ? 'overlay-active' : ''"
             @click="onBackgroundClick">
        </div>
        <MiniMappa class="map" />
        <CardInventory class="card" />
        <InfButton class="buttonInfo" />
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
    </div>
</template>

<style lang="scss" scoped>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 0;
    }
    .map {
        position: fixed;
        bottom: 1vh;
        left: 1vh;
    }
    .card {
        position: absolute;
        bottom: 7vh;
        left: 7vh;
        width: 0;
        height: 0;
    }
    .buttonInfo {
        position: absolute;
        bottom: 35vh;
        right: 30vh;
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
        top: 10vh;
        right: 5vh;
        background-size: cover;
        background-position: center;
    }
    .buttonZombie{
        position: fixed;
        top: 10vh;
        right: 12vh;
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
        width: 5vh;
        height: 5vh;
        object-fit: contain;
        pointer-events: none;
    }
</style>