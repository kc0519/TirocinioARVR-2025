<script setup lang="ts">
</script>

<template>
    <RouterView v-slot="context">
        <Transition name="page" mode="out-in">
            <Component :is="context.Component" :key="context.route.path" />
        </Transition>
    </RouterView>
</template>

<style lang="scss">
    @use "@/assets/scss/index" as *;
</style>