<template>
    <div>
        <span @click="show">下拉菜单</span>
        <dropdown-menu-item v-show="isShow">
            <template>
                <div>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
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
            default: ''
        }
    },
    data(){
        return{
            isShow: false
        }
    },
    components:{
        DropdownMenuItem
    },
    methods:{
        show(){
            if(!this.isShow){
                this.isShow = true
            }else{
                this.isShow = false
            }
        }
    }
}
</script>