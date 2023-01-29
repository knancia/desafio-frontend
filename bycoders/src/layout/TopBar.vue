<template>
    <div id="topbar">
        <LogoComponent class="logo"/>
        <SearchComponent/>
        <AccountComponent/>
    </div>
</template>

<script>

    import LogoComponent from '@/components/topbar/LogoComponent.vue';
    import SearchComponent from '@/components/topbar/SearchComponent.vue';
    import AccountComponent from '@/components/topbar/AccountComponent.vue';

    export default {
        name: 'TopBar',
        components: {
            LogoComponent,
            SearchComponent,
            AccountComponent
        }
    }

</script>

<style scoped>
    #topbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 75px;
        width: calc( 100% - 30px);
        padding: 0px 15px;
        background-color: #02be3b;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .logo {
        cursor: pointer;
    }
</style>