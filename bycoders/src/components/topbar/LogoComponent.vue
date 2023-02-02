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
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    img {
        width: 200px;
        margin-right: 15px;
    }

    @media (max-width: 800px) {
        #LogoComponent {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        img {
            width: 200px;
            margin-right: auto;
            margin-left: auto;
        }
    }
</style>