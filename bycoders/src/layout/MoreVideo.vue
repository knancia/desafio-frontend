<template>
    <div id="moreVideo">
        <div v-for="item in store.searchResults" :key="item.id.videoId">
            <a 
                class="containerCardVideo" 
                href="javascript:void(0)" 
                @click="showVideo(item.id.videoId)" 
                :title="item.snippet.title"
            >
                <img class="thumbImg" :src="item.snippet.thumbnails.high.url" :alt="item.snippet.title">
                <div class="text textTitle">
                    {{ item.snippet.title }}
                </div> 
                <div class="text textChannel">{{ item.snippet.channelTitle }}</div>
            </a>
        </div>
    </div>
</template>

<script>
    import store from '@/store';
    import { searchVideos } from '@/Services/YoutubeService';
    
    export default {
        name: 'MoreVideo',
        data() {
            return {
                store
            }
        },
        async mounted() {
            const searchResult = await searchVideos('')
                store.setSearch('', searchResult)
        },
        methods: {
            showVideo (itemVideoId) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
                store.setMainVideo('https://www.youtube.com/embed/' + itemVideoId)
            }
        }
    }
</script>

<style scoped>
    #moreVideo {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        margin-top: 30px;
        flex-flow: wrap;
    }
    .containerCardVideo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        text-decoration: none;
        width: 300px;
        height: 240px;
        padding: 10px;
        background-color: #2c2c2c;
        margin: 10px;
        border-radius: 7px;
        z-index: 0;
        transition: .3s;
    }
    .containerCardVideo:hover {
        transform: scale(1.05);
        transition: .3s;
    }

    .thumbImg {
        width: 300px;
        height: 168.75px;
        object-fit: cover;
        object-position: center;
        border-radius: 7px;
    }

    @media (max-width: 800px) {
        #moreVideo {
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
            margin-top: 15px;
            flex-flow: wrap;
        }

        .containerCardVideo {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            text-decoration: none;
            width: 270px;
            height: 240px;
            padding: 10px;
            background-color: #2c2c2c;
            margin: 10px;
            border-radius: 7px;
            z-index: 0;
            transition: .3s;
        }
        .thumbImg {
            width: 272px;
            height: 153px;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: center;
            object-position: center;
            border-radius: 7px;
        }
    }
    .containerText {
        width: 300px;
        margin: auto;
        text-align: left;
    }
    .text {
        color: white;
        margin-top: 7px;
        text-align: left;
        width: 100%;
    }
    .textTitle {
        font-size: 14px;
        font-weight: bold;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .textChannel {
        font-size: 13px;
    }
</style>