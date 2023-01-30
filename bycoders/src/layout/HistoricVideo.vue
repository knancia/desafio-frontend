<template>
    <div id="historicVideo">
        <VideoSuggestion
            src="https://via.placeholder.com/150x84"
            alt="Sugestão de video"
            title="Video 01"
            channel="Canal 01"    
        />
    </div>
</template>

<script>
    import VideoSuggestion from '@/components/common/VideoSuggestion.vue';

    export default {
        components: {
            VideoSuggestion
        },
    }
</script>

<style>
    #historicVideo {
        width: 35%;
        background-color: red;
    }
</style>