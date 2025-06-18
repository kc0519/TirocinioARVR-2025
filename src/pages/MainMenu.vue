<script setup lang="ts">
    import GameButtons from "@/components/ui/HUD/GameButtons.vue";
    import GameLobby from "@/components/ui/gameLobby.vue";
    import { useRouter } from "vue-router";

    const router = useRouter();
    function goToGamePage()
    {
        router.push({ name: "game" });
    }

</script>

<template>
    <div class="main-menu">
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
        <GameButtons class="settings-button">
            <span class="material-symbols-outlined addB">settings</span>
        </GameButtons>
        <GameButtons class="help-button">
            <span class="material-symbols-outlined addB">help</span>
        </GameButtons>
    </div>
</template>

<style lang="scss" scoped>
    .main-menu {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        // background-image: url('../../public/img/MenuBackground.png');
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

</style>