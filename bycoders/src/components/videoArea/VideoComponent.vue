<template>
    <iframe  
        class="mainVideo"
        :src="link" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
    ></iframe>
</template>

<script>
    export default {
        name: 'VideoComponent',
        props: ['link'],
        components: {

        }
    }
</script>

<style>
    .mainVideo {
        width: 100%;
        height: 100%;
    }
</style>