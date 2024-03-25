<template>
    <div>
      <div class="dropdown-box">
        <div class="title">普通选择器</div>
        <dropdown-menu :datas="datas"/>
      </div>
      <div class="dropdown-box" >
        <div class="title">有禁止状态选择器</div>
        <dropdown-menu :datas="datas" :type='`disabled`'/>
      </div>
      <div class="dropdown-box" >
        <div class="title">禁用选择器</div>
        <dropdown-menu :datas="datas" :type='`disabled`' :disabled="`disabled`"/>
      </div>
      <div class="dropdown-box" >
        <div class="title">多选选择器</div>
        <dropdown-menu :datas="datas" type='`double`'/>
      </div>

   </div>
</template>
<script>
import DropdownMenu from './dropdownMenu'
export default {
    name: 'SDropdown',
    data(){
      return{
        datas:[
          {
            index:1,
            name:'烤鸭',
            code:'101',
            is_disabled:true
          },
          {
            index:2,
            name:'烤鹅',
            code:'102',
            is_disabled:false
          },
        ]
      }
      
    },
    components: {
        DropdownMenu,
    }

}
</script>
<style lang="less" scope>
.dropdown-box{
  margin-bottom:30px;
  padding:20px;
  .title{
    color:#333;
    font-size:15px;
    margin-bottom:10px;
  }
}
</style>