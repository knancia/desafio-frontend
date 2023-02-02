<template >
    <TopBar/>
    <div class="body" v-if="this.gapi">
        <VideoArea class="videoArea"/>
        <MoreVideo/>
    </div>
</template>

<script>
    import TopBar from './layout/TopBar.vue';
    import VideoArea from './layout/VideoArea.vue';
    import MoreVideo from './layout/MoreVideo.vue';
    import initClient from '@/Services/GoogleClient';

    export default {
        name: 'App',
        components: {
            TopBar,
            VideoArea,
            MoreVideo
        },
        data() {
            return {
                 gapi: undefined
            }
        },  
        methods: {
            async fetchData() {
                this.gapi = await initClient()
            }
        },
        created() {
            this.fetchData()
        }
    }

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .body {
        width: 100%;
        height: 100%;
        background-color: #171616;
        color: white;
        padding-top: 100px;
        padding-bottom: 30px;
    }

    
    @media (max-width: 800px) {
        .body {
            width: 100%;
            height: 100%;
            background-color: #171616;
            color: white;
            padding-top: 0px;
            padding-bottom: 30px;
        }
    }

    .videoArea {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }
</style>
