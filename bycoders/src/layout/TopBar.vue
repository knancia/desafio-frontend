<template>
    <div :class="['topbar', {'closeTopbar' : !btnMenu}]">
        <i class="menu open" v-show="btnMenu" @click="btnMenu = !btnMenu"> &#8801; </i>
        <i class="menu close" v-show="!btnMenu" @click="btnMenu = !btnMenu"> &#10006; </i>
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
        data() {
            return {
                btnMenu: true
            }
        },
        components: {
            LogoComponent,
            SearchComponent,
            AccountComponent
        }
    }

</script>

<style scoped>
    .topbar {
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
        z-index: 5;
    }

    .menu {
        display: none;
    }

    @media (max-width: 800px) {
        .menu {
            display: block;
            bottom: 15px;
            position: absolute;
            color: #02be3b;;
            background-color: #ffffffb5;
            border-radius: 4px;
            font-style: normal;
            width: 28px;
            height: 28px;
            box-sizing: border-box;
        }
        .open {
            font-size: 25px;
            left: -35px;
        }
        .close {
            font-size: 19px;
            right: 262px;
        }
        .topbar {
            height: 100vh;
            box-sizing: border-box;
            width: 100vw;
            position: fixed;
            z-index: 10;
            background-color: #02be3b;
            background: linear-gradient(90deg, rgb(255 255 255 / 16%) calc(100vw - 256px), #02be3b calc(100vw - 256px));
            right: -100vw;
            top: 0;
            left: unset;
            padding: 15px;
            padding-left: calc(100vw - 241px);
            display: flex;
            flex-direction: column;
            align-items: unset;
            justify-content: unset;
            transition: 1s;
        }
        
        .closeTopbar {
            right: 0;
            transition: 1s;
        }
    }



</style>