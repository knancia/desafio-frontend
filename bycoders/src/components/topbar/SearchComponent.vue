<template>
    <div id="searchComponent">
        <CustomInput 
            v-model="searchText"
            type="text"
            @keydown.enter="onSearch(searchText); cleanInput()"
            @focus="historic = true"
            @blur="closeHistoric(); cleanInput()"
        />
        <CustomButton
            text="P"
            @click="onSearch(searchText)"
        />
        <div class="containerHistoricSearch" v-if="historic">
            <a 
                class="itemHistoricSearch" 
                href="javascript:void(0)" 
                v-for="item in store.historicSearch"
                :key="item"
                :title="item"
                @click="onSearch(item)"
            >
                <fa class="icon" icon="clock-rotate-left"/> {{ item }}
            </a>
        </div>
    </div>
</template>

<script>
    import { defineComponent, toRefs, reactive } from 'vue';
    import CustomInput from '../common/CustomInput.vue';
    import CustomButton from '../common/CustomButton.vue';
    import store from '@/store';
    import { searchVideos } from '@/Services/YoutubeService';

    export default defineComponent ({
        name: 'SearchComponent',
        components: {
            CustomInput,
            CustomButton
        },  
        data() {
            return {
                store,
                historic: false,
            }
        },     
        setup() {
            const data = reactive({
                searchText: '',
            });
            return { ...toRefs(data) };
        },
        methods: {
           async onSearch(query) {
                const searchResult = await searchVideos(query)
                store.setSearch(query, searchResult)
                this.closeHistoric()
            },
            closeHistoric() {                
                setTimeout(() => {
                    this.historic = false
                }, 100);
            },
            cleanInput() {
                setTimeout(() => {
                    this.searchText = ''
                }, 100);
            }

        }
    })
</script>

<style scoped>
    #searchComponent {
        width: 350px;
        display: flex;
        align-items: center;
        justify-content: center;  
        position: relative;
    }
    .searchComponent {
        margin-right: 15px;
    }

    .containerHistoricSearch {
        position: absolute;
        top: 30px;
        background-color: white;
        display: flex;
        flex-direction: column;
        border-radius: 7px;
        width: 350px;
    }

    @media (max-width: 800px) {
        #searchComponent {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center; 
            margin-top: 15px; 
        }
        .containerHistoricSearch {
            position: absolute;
            top: 30px;
            background-color: white;
            display: flex;
            flex-direction: column;
            border-radius: 7px;
            width: 50px;
        }
    }



    .itemHistoricSearch {
        text-decoration: none;
        color: black;
        padding: 7px 10px;
        text-align: left;
        border-radius: 7px;

        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    .itemHistoricSearch:hover {
        background-color: #e8e8e8;
    }
    .itemHistoricSearch .icon {
        margin-right: 7px;
    }
</style>