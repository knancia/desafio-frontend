<template>
    <input 
        class="customInput" 
        :type="type"
        :value="modelValue"
        @input="updateValue"
    >
</template>

<script>
    export default {
        name: 'CustomInput',
        props: {
            type: String,
            modelValue: [String, Number],
            submitEnter: []
        }, 
        methods: {
            updateValue(e) {
                this.$emit("update:modelValue", e.target.value)
            }
        }
    }
</script>

<style scoped>
    .customInput {
        width: 300px;
        height: 30px;
        border-top: 2px solid #343434;
        border-bottom: 2px solid #343434;
        border-left: 2px solid #343434;
        border-right: none;
        outline: none;
        padding: 0px 7px;
        border-radius: 7px 0px 0px 7px;
        box-sizing: border-box;
        background-color: #171616f2;
        color: #cfcfcf;
    }
    
    .customInput:focus {
        border-top: 1px solid #343434;
        border-bottom: 1px solid #343434;
        border-left: 1px solid #343434;
    }
</style>