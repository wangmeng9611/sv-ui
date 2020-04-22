<template>
    <div class="sv-row">
        <button class="sv-button" :disabled="disabled" :class="[`sv-button--${type}`,{
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle,
            'is-disabled': disabled
        }]" @click="handleClick()">
            <i v-if="icon" :class="icon"></i>
           <span v-if="$slots.default"><slot></slot></span> 
        </button>
    </div>
</template>
<script>
export default {
    name: "sv-button",
    props:{
        type: {
            type: String,
            default: "default"
        },
        plain: {
            type: Boolean,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        circle: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    methods:{
        handleClick(){
            this.$emit("click")
        }
    }
}
</script>
<style lang="less">
.sv-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    margin: 10px ;
}
// 圆角

    .sv-button--default:hover{
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
    .sv-button--default.is-plain:hover{
        background: #fff;
        border-color: #409eff;
        color: #409eff;
    }
    .sv-button--success{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover{
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
     .sv-button--success.is-plain{
        color: #67c23a;
        background: #f0f9eb;
        border-color: #c2e7b0;
        &:hover{
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .sv-button--success.is-round{
        border-radius: 20px;
        padding: 12px 23px;
    }
    .sv-button--primary{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover{
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
      .sv-button--primary.is-plain{
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
        &:hover{
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }

    .sv-button--info{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover{
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
     .sv-button--info.is-plain{
        color: #909399;
        background: #f4f4f5;
        border-color: #d3d4d6;
        &:hover{
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }
    .sv-button--warning{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
        &:hover{
            background: #ebb563;
            border-color: #ebb563;
            color: #fff;
        }
    }
    .sv-button--warning.is-plain{
        color: #e6a23c;
        background: #fdf6ec;
        border-color: #f5dab1;
        &:hover{
            background: #e6a23c;
            border-color: #e6a23c;
            color: #fff;
        }
    }
    .sv-button--danger{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover{
            background: #f78989;
            border-color: #f78989;
            color: #fff; 
        }
    }
    .sv-button--danger.is-plain{
        color: #f56c6c;
        background: #fef0f0;
        border-color: #fbc4c4;
        &:hover{
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }
.sv-button--default.is-round,.sv-button--primary.is-round,
.sv-button--success.is-round,.sv-button--warning.is-round,
.sv-button--info.is-round,.sv-button--danger.is-round{
    border-radius: 20px;
    padding: 12px 23px;
}
.sv-button--default.is-circle,.sv-button--primary.is-circle,
.sv-button--success.is-circle,.sv-button--warning.is-circle,
.sv-button--info.is-circle,.sv-button--danger.is-circle{
    border-radius: 50px;
    padding: 12px ;
}
.sv-button [class*=sv-icon-]+span{
    margin-left : 5px;
}



.sv-button--default.is-disabled{
    background-color: #fff;
    border-color: #ebeef5;
    background-image: none;
    color: #c0c4cc;
}

.sv-button--primary.is-disabled{
    color: #fff;
    background-color: #a0cfff;
    border-color: #a0cfff;
}
.sv-button--success.is-disabled{
    color: #fff;
    background-color: #b3e19d;
    border-color: #b3e19d;
}
.sv-button--info.is-disabled{
    color: #fff;
    background-color: #c8c9cc;
    border-color: #c8c9cc;
}
.sv-button--warning.is-disabled{
    color: #fff;
    background-color: #f3d19e;
    border-color: #f3d19e;
}
.sv-button--danger.is-disabled{
    color: #fff;
    background-color: #fab6b6;
    border-color: #fab6b6;
}
.sv-button--default.is-disabled.is-plain{
    background-color: #fff;
    border-color: #ebeef5;
    color: #c0c4cc;
}
.sv-button--primary.is-disabled.is-plain{
    color: #8cc5ff;
    background-color: #ecf5ff;
    border-color: #d9ecff;
}
.sv-button--success.is-disabled.is-plain{
    color: #a4da89;
    background-color: #f0f9eb;
    border-color: #e1f3d8;
}
.sv-button--info.is-disabled.is-plain{
    color: #bcbec2;
    background-color: #f4f4f5;
    border-color: #e9e9eb;
}
.sv-button--warning.is-disabled.is-plain{
    color: #f0c78a;
    background-color: #fdf6ec;
    border-color: #faecd8;
}
.sv-button--danger.is-disabled.is-plain{
    color: #f9a7a7;
    background-color: #fef0f0;
    border-color: #fde2e2;
}
.sv-button.is-disabled{
    &:hover{
        cursor: not-allowed;
    }
}
// 文字按钮
.sv-button--text{
    border-color: transparent;
    color: #409eff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
    &:hover{
        color: #66b1ff;
        border-color: transparent;
        background-color: transparent;
    }
}
.sv-button--text.is-disabled{
    color: #c0c4cc;
}
</style>