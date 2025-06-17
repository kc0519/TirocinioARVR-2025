<script setup  lang="ts">
    import { ref } from "vue";

    const numberOfPlayers = ref(5); // Default value, can be changed
</script>

<template>
    <div class="lobby" :class="`lobby-${numberOfPlayers}`">
        <div v-for="item in numberOfPlayers"
             :key="item"
             class="user-icon"></div>
        <div v-if="numberOfPlayers < 12" class="add">
            <span class="material-symbols-outlined addB">add_circle</span>
        </div>
    </div>
    <input v-model.number="numberOfPlayers"
           type="number"
           min="1"
           max="12"
           step="1" />
</template>

<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  width: 100vw;
    height: 100vh;
}

.addB{
    width: 100%;
    aspect-ratio: 1;
    text-align: center;
    align-content: center;
    font-size: 184%;
}

input {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1000; // Ensure the input is above other elements
}

.user-icon, .add {
    border-radius: 50%;
    width: 3.5%;
    left: 50%;
    aspect-ratio: 1/1;
    background-color: rgba(200, 200, 200, 0.5);
    margin: 0 0.5%;
}

.lobby {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

@for $i from 1 through 12 {
  .lobby-#{$i} {
    .circle-container {
      position: relative;
    }
  }
}
</style>