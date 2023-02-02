<template>
    <button class="customButton"> <fa icon="magnifying-glass" style="transform: rotateY(180deg);"/>  </button>
</template>

<script>
    export default {
        name: 'CustomButton',
        props: ['text'],
        components: {

        }
    }
</script>

<style>
    .customButton {
        cursor: pointer;
        background-color: #343434;
        height: 30px;
        padding: 0 15px;
        border-top: 2px solid #343434;
        border-bottom: 2px solid #343434;
        border-right: 2px solid #343434;
        border-left: 1px solid #343434;
        border-radius: 0px 7px 7px 0px;
        outline: none;
        color: #cfcfcf;

        transition: .5s;
    }
</style>