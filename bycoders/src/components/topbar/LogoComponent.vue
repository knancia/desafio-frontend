<template>
    <div id="LogoComponent">
        <img src="@/assets/logo_topbar.svg" alt="ByCoders Logo">
    </div>
</template>

<script>
    export default {
        name: 'LogoComponent'
    }
</script>

<style scoped>
    #LogoComponent {
        width: 350px;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    img {
        width: 200px;
        margin-right: 15px;
    }
</style>