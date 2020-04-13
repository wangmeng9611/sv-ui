<template>
    <div >
        <button class="kkb-button" type ="red" @click="handleClick()">
            <slot></slot>
        </button>
    </div>
</template>
<script>
export default {
    name: "kkb-button",
    methods:{
        handleClick(){
            this.$emit("click")
        }
    }
}
</script>
<style lang="less">
.kkb-button{
    background: red;
    width: 80px;
    height: 30px;
    outline: none !important;
    border-radius: 5px;
    color: aliceblue;
    border: 0;
}
</style>