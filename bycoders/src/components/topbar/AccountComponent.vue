<template>
    <div id="accountComponent">
        <a href="#1">Criar Conta</a>
        <a href="#1">Fazer Login</a>
    </div>
</template>

<script>
    export default {
        name: 'AccountComponent',
        components: {

        }
    }
</script>

<style>
    #accountComponent {
        width: 350px;
        background-color: red;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
</style>