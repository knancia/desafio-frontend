<template>
    <div id="searchComponent">
        <CustomInput 
            class="customInput"
        />
        <CustomButton
            text="P"
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