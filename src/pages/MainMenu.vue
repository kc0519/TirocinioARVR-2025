<script setup lang="ts">
    import GameButtons from "@/components/ui/HUD/GameButtons.vue";
    import GameLobby from "@/components/ui/gameLobby.vue";
    import InfoWindow from "@/components/ui/HUD/InfoWindow.vue";
    import GameMenuButtons from "@/components/ui/HUD/GameMenuButtons.vue";
    import { useRouter } from "vue-router";
    import { ref } from "vue";

    const showInfoOverlay = ref(false);
    const showMenu = ref(false);
    const router = useRouter();
    function goToGamePage()
    {
        router.push({ name: "game" });
    }
    function openInfoOverlay()
    {
        showInfoOverlay.value = true;
    }
    function closeInfoOverlay()
    {
        showInfoOverlay.value = false;
    }

</script>

<template>
    <div class="main-menu">
        <div class="main-menu-container">
            <h1 class="title">
                BROKEN DAGGERZ
            </h1>
            <div class="buttons-container">
                <GameButtons class="start-game-button button" @click="goToGamePage">
                    Nuova Partita
                </GameButtons>
                <GameButtons class="start-tutorial-button button">
                    Tutorial
                </GameButtons>
            </div>
            <GameLobby />
            <GameButtons class="settings-button" @click="showMenu = true">
                <span class="material-symbols-outlined addB">settings</span>
            </GameButtons>
            <GameButtons class="help-button">
                <span class="material-symbols-outlined addB"
                      @click="openInfoOverlay()">help</span>
            </GameButtons>
            <div v-if="showInfoOverlay || showMenu" class="info-overlay-blocker"></div>
            <InfoWindow v-if="showInfoOverlay"
                        class="infoWindow"
                        @close="closeInfoOverlay" />
            <GameMenuButtons v-if="showMenu"
                             class="gameMenuButtons"
                             @close="showMenu = false">
                <button class="button-menu" @click="console.log('Generali')">
                    Generali
                </button>
                <button class="button-menu" @click="console.log('Crediti')">
                    Crediti
                </button>
                <button class="button-menu" @click="showMenu = false">
                    Chiudi
                </button>
            </GameMenuButtons>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main-menu {
        position: relative;
        width: 100vw;
        height: 100vh;
        transform: translate(-50%, 0);
        left: 50%;
        background-image: url('../../public/img/MenuBackground.png');
        background-size: cover;
    }

    .main-menu-container {
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    @media screen and (min-width: 1200px) {
        .main-menu-container {
            width: 1200px;
            margin: 0 auto;
        }
    }

    .button{
        position: absolute;
        width: 20%;
        aspect-ratio: 339/132;
        height: auto;
        top: 45%;
        z-index: 1;
        background-image: url('../../public/img/StartGameButton.png');
        background-size: cover;
        font-family: inknut antiqua, serif;
        font-size: 2em;
    }
    .start-game-button {
        left: 25%;
    }
    .start-tutorial-button {
        right: 25%;
    }
    .settings-button{
        position: absolute;
        top: 3%;
        right: 8%;
        background-size: cover;
        background-position: center;
    }
    .help-button{
        position: absolute;
        top: 3%;
        right: 2%;
        background-size: cover;
        background-position: center;
    }
    .title {
        padding: 0.5em 1.5em;
        background: #782C2C;
        border: 10px solid black;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        font-family: inknut antiqua, serif;
        font-size: 4em;
        color: black;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .addB{
        width: 100%;
        aspect-ratio: 1;
        text-align: center;
        align-content: center;
        font-size: 184%;
    }
    .infoWindow {
        pointer-events: auto;
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 100;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .info-overlay-blocker {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 50;
        background: rgba(0,0,0,0.2);
        pointer-events: auto;
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
    .button-menu{
                background-color:antiquewhite;
                width: 20vw;
                height: 10vw;
                padding: 12px 20px;
                border: none;
                border-radius: 6px;
                margin-top: 2vh;
                margin-bottom: 2vh;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                /* transition: all 0.3s ease; */
                box-shadow: 0 0.5vw 1vw rgba(0,0,0,0.5);
            }

            .button-menu:hover {
            background-color: darken(antiquewhite, 10%);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .button-menu:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }

</style>