<template>
  <div id="app">
    <kkb-button @click="del()">提交</kkb-button>
    <kkb-table></kkb-table>
    <!-- <kkb-confirm></kkb-confirm> -->
  </div>
</template>
<script>
import Vue from 'vue'
import buttton from './components/button'
import confirm from './components/confirm'

import kkbTable from './components/table/src/kkb-table'
Vue.use(buttton)
Vue.use(confirm)
export default {
  name: 'App',
  components:{
    kkbTable,
  },

  methods:{
    del(){
      console.log(12)
      this.$confirm("确认删除吗?",[
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
<style lang="less">

</style>
