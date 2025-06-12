<script lang="ts" setup>
    // import AlertHandler from "./components/handlers/AlertHandler.vue";
    // import DefaultLayout from "./layouts/DefaultLayout.vue";
    import PlayerWheel from "./components/codiciHtml/playerWheel/playerWheel.vue";
    import PlayerCard from "./components/codiciHtml/playerCard/playerCard.vue";
</script>

<template>
    <!-- <DefaultLayout>
        <RouterView v-slot="context">
            <Transition name="page" mode="out-in">
                <Component :is="context.Component" :key="context.route.path" />
            </Transition>
        </RouterView>
    </DefaultLayout>
    <AlertHandler /> -->
    <PlayerWheel />
    <PlayerCard />
</template>

<style>
    body{
        height: 100vh;
        width: 100vw;
        margin: 0;
        box-shadow: 0;
    }
</style>

<style lang="scss">
    @use "@/assets/scss/index" as *;

    // #app
    // {
    //     .page-enter-from,
    //     .page-leave-to
    //     {
    //         opacity: 0;
    //     }
    //     .page-enter-active,
    //     .page-leave-active
    //     {
    //         transition: opacity $app-transition-duration $app-transition-timing-function;
    //     }
    //     .page-enter-to,
    //     .page-leave-from
    //     {
    //         opacity: 1;
    //     }
    // }
</style>
