<script setup lang="ts">
    import { defineEmits } from "vue";
    const emit = defineEmits(["close"]);
    function closeOverlay()
    {
        emit("close");
    }
</script>
<template>
    <div class="zombie-overlay">
        <div class="zombie-window">
            <div class="overlay-content">
                <h3>Sezione 1: Introduzione</h3>
                <p>
                    Questo è un esempio di overlay scrollabile. Puoi inserire qui tutte le
                    informazioni che vuoi mostrare agli utenti.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3>Sezione 2: Dettagli</h3>
                <p>
                    Altre informazioni dettagliate, testo lungo per testare lo scroll.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, nisi eu consectetur.
                </p>
                <p>
                    Ancora altro testo per riempire e vedere lo scroll.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, nisi eu consectetur.
                </p>
                <h3>Sezione 3: Conclusioni</h3>
                <p>
                    Testo finale. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, nisi eu consectetur.
                </p>
            </div>
            <button class="button-close" @click="closeOverlay">
                Chiudi
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.zombie-window {
        width: 60vw;
        max-width: 600px;
        height: 70vh;
        background-color: bisque;
        border: solid 2px black;
        box-shadow: 0 0.5vw 1vw rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
.overlay-content {
        flex: 1;
        overflow-y: auto;
        padding: 2rem;
        max-height: 70vh;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
.button-close{
        align-self: center;
        width: 12vh;
        height: 7vh;
        background-color: white;
        border: none;
        cursor: pointer;
        font-size: 1.5rem;
        border: 3px solid black;
        border-radius: 6px;
    }
.button-close:hover {
        background-color: darken(white, 20%);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
</style>
