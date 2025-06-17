<script setup lang="ts">
    import { defineEmits } from "vue";
    const emit = defineEmits(["close"]);
    const closeMenu = () =>
    {
        emit("close");
    };
</script>
<template>
    <div class="menu">
        <button class="button" @click="closeMenu">
            Riprendi
        </button>
        <button class="button" @click="console.log('Audio')">
            Audio
        </button>
        <button class="button" @click="console.log('Lingua')">
            Lingua
        </button>
        <button class="button" @click="console.log('Torna al menù')">
            Torna al menù
        </button>
    </div>
</template>
<style lang="scss" scoped>
.menu{
                width: 50vh;
                height: 50vh;
                background-color: bisque;
                border: solid 2px black;
                box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.5);
            }
            .button{
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

            .button:hover {
            background-color: darken(antiquewhite, 10%);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }

            .button:active {
            transform: translateY(0);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
</style>