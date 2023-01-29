<template>
    <div id="videoArea">
        <VideoComponent
            link="https://www.youtube.com/embed/VgDgWzBL7s4"
        />
    </div>
</template>

<script>
    import VideoComponent from '@/components/videoArea/VideoComponent.vue';

    export default {
        name: 'VideoArea',
        components: {
            VideoComponent
        }  
    }
</script>

<style>
    #videoArea {
        width: 65%;
        background-color: red;
    }
</style>