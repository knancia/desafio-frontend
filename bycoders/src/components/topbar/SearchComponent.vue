<template>
    <div id="searchComponent">
        <CustomInput 
            v-model="searchText"
        />
        <CustomButton
            text="P"
            @click="store()"
        />
    </div>
</template>

<script>
    import CustomInput from '../common/CustomInput.vue';
    import CustomButton from '../common/CustomButton.vue';

    export default {
        name: 'SearchComponent',
        components: {
            CustomInput,
            CustomButton
        },
        data() {
            return {
                searchText: ''
            }
        },
        mounted() {
            this.search();
        },
        methods: {
            store() {
                console.log("pastel")
                console.log(this.searchText)
            },  
            async search() {
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

<style scoped>
    #searchComponent {
        width: 350px;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;  
    }
    .searchComponent {
        margin-right: 15px;
    }
</style>