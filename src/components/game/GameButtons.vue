<template>
    <button class="button">
        <slot> </slot>
    </button>
</template>
<style lang="scss" scoped>
    .button{
        width: 4%;
        aspect-ratio: 1;
        height: auto;
        border-radius: 4px;
        cursor: pointer;
        background-image: url('./BackgroundButton.png');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: none;

        &:hover {
            filter: brightness(0.7);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
    }
</style>