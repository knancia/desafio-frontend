<template>
    <div id="accountComponent">
        <button class="btnLogin" type="button"> 
            <fa icon="user"/> 
            <span>Login</span> 
        </button>
    </div>
</template>

<script>
    export default {
        name: 'AccountComponent',
        components: {

        }
    }
</script>

<style>
    #accountComponent {
        width: 350px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    @media (max-width: 800px) {
        #accountComponent {
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            position: absolute;
            bottom: 15px;
            right: 78px;
        }
    }
    .btnLogin {
        background-color: #343434;
        color: #cfcfcf;
        width: 100px;
        height: 30px;
        border-radius: 7px;
        border: none;
        outline: none;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .btnLogin span {
        font-size: 12px;
        font-weight: bold;
    }
</style>