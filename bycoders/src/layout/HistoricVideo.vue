<template>
    <div id="historicVideo">
        <VideoSuggestion
            src="https://via.placeholder.com/150x84"
            alt="Sugestão de video"
            title="Video 01"
            channel="Canal 01"    
        />
        <VideoSuggestion
            src="https://via.placeholder.com/150x84"
            alt="Sugestão de video"
            title="Video 02"
            channel="Canal 02"    
        />
        <VideoSuggestion
            src="https://via.placeholder.com/150x84"
            alt="Sugestão de video"
            title="Video 03"
            channel="Canal 03"    
        />
        <VideoSuggestion
            src="https://via.placeholder.com/150x84"
            alt="Sugestão de video"
            title="Video 04"
            channel="Canal 04"    
        />
    </div>
</template>

<script>
    import VideoSuggestion from '@/components/common/VideoSuggestion.vue';

    export default {
        components: {
            VideoSuggestion
        }
    }
</script>

<style>
    #historicVideo {
        width: 35%;
        background-color: red;
    }
</style>