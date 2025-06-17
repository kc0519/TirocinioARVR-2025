<template>
    <div class="tooltip-container">
        <div class="button"></div>
        <div class="tooltip-message">
            Messaggio al passaggio!
        </div>
    </div>
</template>
<style lang="scss" scoped>
.tooltip-container {
            position: absolute;
            bottom: 35vh;
            right: 20vh;
        }

        .button {
            width: 10vh;
            height: 10vh;
            background-color: lightblue;
            border-radius: 50%;
            border: solid 2px black;
            box-shadow: -0.5vw 0 1vw rgba(0, 0, 0, 0.5);
            cursor: pointer;
        }

        .tooltip-message {
            visibility: hidden;
            background-color: black;
            color: #fff;
            text-align: center;
            padding: 5px 8px;
            border-radius: 5px;

            position: absolute;
            bottom: 110%; /* posizionato sopra il bottone */
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;

            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1;
        }

        .tooltip-container:hover .tooltip-message {
            visibility: visible;
            opacity: 1;
        }

        .button:hover {
            background-color: darken(lightblue, 40%);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            }
        </style>
