<script setup lang="ts">
    import { defineEmits } from "vue";
    // import { useRouter } from "vue-router";
    const emit = defineEmits(["close"]);
    const closeMenu = () =>
    {
        emit("close");
    };
    // const router = useRouter();
    // function goToMenuPage()
    // {
    //     router.push({ name: "main" });
    // }
</script>
<template>
    <div class="menu">
        <slot>
            <button class="button" @click="closeMenu">
                Riprendi
            </button>
            <button class="button" @click="console.log('Audio')">
                Audio
            </button>
            <button class="button" @click="console.log('Lingua')">
                Lingua
            </button>
            <form action="..">
                <button class="button"
                        type="submit">
                    Torna al menù
                </button>
            </form>
        </slot>
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
                height: 5vw;
                padding: 12px 20px;
                border: none;
                border-radius: 6px;
                margin-top: 2vh;
                margin-bottom: 2vh;
                cursor: pointer;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
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