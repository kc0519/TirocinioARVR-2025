<script setup lang="ts">
    import GameButtons from "@/components/ui/HUD/GameButtons.vue";
</script>

<template>
    <div>
        <GameButtons class="start-game-button button">
            Nuova Partita
        </GameButtons>
        <GameButtons class="start-tutorial-button button">
            Tutorial
        </GameButtons>
    </div>
</template>

<style lang="scss" scoped>
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