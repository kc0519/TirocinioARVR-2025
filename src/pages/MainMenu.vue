<script setup lang="ts">
    import GameButtons from "@/components/ui/HUD/GameButtons.vue";
    import GameLobby from "@/components/ui/gameLobby.vue";
</script>

<template>
    <div class="main-menu">
        <div class="buttons-container">
            <GameButtons class="start-game-button button">
                Nuova Partita
            </GameButtons>
            <GameButtons class="start-tutorial-button button">
                Tutorial
            </GameButtons>
        </div>
        <GameLobby />
    </div>
</template>

<style lang="scss" scoped>
    .buttons-container {
        width: 100%;
    }
    .main-menu {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-image: url('../../public/img/MainMenuBackground.png');
        background-size: cover;
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
</style>