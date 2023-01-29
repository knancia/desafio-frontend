<template>
    <div id="videoComponent">
        <iframe  
            class="mainVideo"
            :src="link" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        ></iframe>
    </div>
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
        aspect-ratio: 16/9;
    }
</style>