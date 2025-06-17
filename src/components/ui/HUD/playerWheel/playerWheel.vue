<script lang="ts" setup>
    import PlayerOrder from "./playerOrder.vue";
    import NumberOfActions from "./numberOfActions.vue";

</script>

<template>
    <div class="playerWheel">
        <PlayerOrder />
        <NumberOfActions />
    </div>
</template>

<style lang="scss" scoped>
.playerWheel {
  --circle-width: 115px;
  --wheel-proportion: 0.16;
  border-radius: 50%;
  position: absolute;
  top: 1%;
  left: 1%;
  width: calc((var(--circle-width) * var(--wheel-proportion)) + var(--circle-width));
  aspect-ratio: 1 / 1;
  padding-top: calc(var(--circle-width) * var(--wheel-proportion) / 2);
  padding-left: calc(var(--circle-width) * var(--wheel-proportion) / 2);
  background-image: url("./img/wheelBackground.png");
  background-position: center;
  background-size: calc((var(--circle-width) * var(--wheel-proportion)) + var(--circle-width));
  z-index: 1;
}

.background {
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
}
</style>