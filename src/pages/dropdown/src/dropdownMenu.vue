<template>
    <div>
        <div class="choose-food" :class="{'choose-food-disabled':disabled==='disabled'}" :style="{fontWeight:chooseFood?'700':'400'}" @click="show">{{chooseFood?chooseFood:'请选择'}}</div>
        <dropdown-menu-item v-show="isShow">
            <template>
                <div class="choose-food-list">
                  <div class="choose-food-item" :class="{'is-disabled':(type==='disabled'&&item.is_disabled)}"  @click="chooseItem(item)" v-for="item in datas">{{item.name}}</div>
                </div>
            </template>
        </dropdown-menu-item>
    </div>
</template>
<script>
import DropdownMenuItem from './dropdownMenuItem'
export default {
    props:{
      datas: {
        type: Array,
      },
      type:{
        type:String,
        default:'default'
      },
      disabled:{
        type:String,
        default:'default'
      }
    },
    data(){
      return{
        isShow: false,
        chooseFood:''
      }
    },
    components:{
        DropdownMenuItem
    },
    methods:{
      show(){
        console.log('show',this.isShow)
        if(this.disabled==='disabled') return;
          if(!this.isShow){
              this.isShow = true
          }else{
              this.isShow = false
          }
      },
      chooseItem(item){
        if(this.type==='disabled'&&item.is_disabled){
          return;
        }
        this.chooseFood=item.name;
        this.isShow = false
        console.log(item,this.type,this.chooseFood);

      }
    }
}
</script>
<style lang="less" scope>

.choose-food{
  width:200px;
  line-height:30px;
  color:#000;
  box-sizing:border-box;
  border:1px solid rgba(225,225,225,0.6);

}
.choose-food-disabled{
  color: #c0c4cc;
  cursor: not-allowed;
}
.choose-food-list{
  width:200px;
  border:1px solid rgba(225,225,225,0.6);
  .choose-food-item{
    color:#666;
    width:100%;
    line-height:30px;
    text-align:center;
    border-bottom:1px dashed #eee;
    &::last{
      border:none;
    }
  }
  .is-disabled{
    color:#c0c4cc;
    cursor: not-allowed;
  }
}
</style>