<template>
    <div :class="[ 'video widthVideo', { 'closeVideo' : !store.mainVideo } ]" id="videoArea">
        <VideoComponent
            v-show="store.mainVideo != ''"
            :link="store.mainVideo"
        />
    </div>
</template>

<script>
    import VideoComponent from '@/components/videoArea/VideoComponent.vue';
    import store from '@/store';
    
    export default {
        name: 'VideoArea',
        components: {
            VideoComponent
        },
        data() {
            return {
                store
            }
        }
    }
</script>

<style>
    .video {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: auto;
        transition: .5s;
    }

    @media (max-width: 500px) {
        .widthVideo {
            width: 100%;
            height: 100%;
        }
    }

    @media (min-width: 500px) {
        .widthVideo {
            width: 720px;
            height: 405px;
        }
    }

    @media (min-width: 800px) {
        .widthVideo {
            width: 720px;
            height: 405px;
        }
    }

    @media (min-width: 1200px) {
        .widthVideo {
            width: 1088px;
            height: 612px;
        }
    }

    .closeVideo {
        margin: auto;
        height: 0px;
        overflow: hidden;
        transition: .5s;
    }

</style>