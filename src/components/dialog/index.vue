<template lang="">
    <div class="dialog">
        <h2>Dialog 对话框</h2>
        <p>在保留当前页面状态的情况下，告知用户承载相关操作</p>
        <div class="btn">
            <div style="margin:20px 0">
                <h3>基本用法</h3>
                <p></p>
            </div>
            <div class="sv-body">
                <div class="sv-row">
                    <sv-button type="default" @click="handleClick">点击打开Dialog</sv-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        handleClick(){
            console.log(12)
            this.$confirm('你确定要删除吗？',[
            {
            text:"取消",
            onPress: ()=>{
                console.log("取消按钮")
            }
            },
            {
            text:"确认",
            onPress: ()=>{
                console.log("确认按钮")
            }
            }
        ])
        }
    }
}
</script>
<style lang="less" scoped>
    
</style>