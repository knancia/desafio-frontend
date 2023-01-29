<template>
    <div id="videoSuggestion">
        <img class="previewVideo"  :src="src" :alt="alt">
        <div class="containerTexto">
            <span class="title">{{ title }}</span>
            <span class="channel">{{ channel }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'VideoSuggestion',
        props: ['src', 'alt', 'title', 'channel'],
        components: {

        }
    }
</script>

<style scoped>
    #videoSuggestion {
        display: flex;
        padding: 5px 15px;
        align-items: center;
    }

    .previewVideo {
        width: 150px;
        aspect-ratio: 16/9;
        border-radius: 5px;
        margin-right: 15px;
    }

    .containerTexto {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        height: 60px;
    }

    .title {
        font-size: 16px;
        font-weight: bolder;
    }

    .channel{
        font-size: 14px;
    }
</style>