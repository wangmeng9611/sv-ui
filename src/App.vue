<template>
  <div id="app">
    <div class="sv-header">sv-ui</div>
    <div class="sv-body">
      <div class="sv-left">
        <ul>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/dropdown">dropdown 下拉</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
         <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/">Button 按钮</router-link>
          </li>
        </ul>
      </div>
      <div class="sv-right">
         <router-view/>
      </div>   
    </div>  
  </div>
</template>
<script>
export default {
  name: 'App',
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
*{
  margin: 0;
  padding: 0;
}
#app{
  // background: grey;
  height: 100%;
  text-decoration: none;
  .sv-header{
    line-height: 200px;
    //background: hotpink;
    border:1px dashed #eee;
    color: #00ffff;
    font-size :20px;
  }
  .sv-body{
    display: flex;
    .sv-left{
      width: 200px;
      //background: rgb(175, 105, 255);
      border:1px dashed #eee;
      ul{
        text-align: center;
        li{
          margin: 10px auto;
        }
      }
    }
    .sv-right{
      margin-left: 20px;
      margin-top: 20px;
    }
  }
}
</style>