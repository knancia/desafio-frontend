<template>
    <TopBar/>
    <div class="body">
        <div class="containerVideoHistoric">
            <VideoArea/>
            <HistoricVideo/>
        </div>
        <MoreVideo/>
    </div>
</template>

<script>
    import TopBar from './layout/TopBar.vue';
    import VideoArea from './layout/VideoArea.vue';
    import HistoricVideo from './layout/HistoricVideo.vue';
    import MoreVideo from './layout/MoreVideo.vue';

    export default {
        name: 'App',
        components: {
            TopBar,
            VideoArea,
            HistoricVideo,
            MoreVideo
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
        height: 100vh;
        background-color: #171616;
        color: white;
        padding-top: 100px;
    }

    .containerVideoHistoric {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
    }
</style>
