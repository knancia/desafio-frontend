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
        mounted() {
                this.pastel();
        },
        methods: {
            async pastel() {
                console.log('result1: ');
                const result = await this.gapi.client.youtube.search.list({
                    q: 'MrBeast',
                    part: 'snippet',
                    type: 'video',
                    maxResults: 25,
                    order: 'relevance'
                });
                console.log('result2: ', result);
            }
        }
    }
</script>

<style>
    #historicVideo {
        width: 35%;
        background-color: red;
    }
</style>