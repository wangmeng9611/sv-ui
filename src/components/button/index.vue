<template>
    <div class="sv-ui">
        <h2>Button 按钮</h2>
        <p>常用的操作按钮</p>
        <div class="btn">
            <div style="margin:20px 0">
                <h3>基本用法</h3>
                <p>基本按钮用法</p>
            </div>
            <div class="sv-body">
                <div class="sv-row">
                    <sv-button type="default">默认按钮</sv-button>
                    <sv-button type="primary">主要按钮</sv-button>
                    <sv-button type="success">成功按钮</sv-button>
                    <sv-button type="info">信息按钮</sv-button>
                    <sv-button type="warning">警告按钮</sv-button>
                    <sv-button type="danger">警告按钮</sv-button>
                </div>
                
                <div class="sv-row">
                    <sv-button type="default" icon="sv-icon- icon-chenggong1" plain>朴素按钮</sv-button>
                    <sv-button type="primary" plain >主要按钮</sv-button>
                    <sv-button type="success" plain>成功按钮</sv-button>
                    <sv-button type="info" plain>信息按钮</sv-button>
                    <sv-button type="warning" plain>警告按钮</sv-button>
                    <sv-button type="danger" plain>警告按钮</sv-button>
                </div>
                <div class="sv-row">
                    <sv-button type="default" round>圆角按钮</sv-button>
                    <sv-button type="primary" round>主要按钮</sv-button>
                    <sv-button type="success" round>成功按钮</sv-button>
                    <sv-button type="info" round>信息按钮</sv-button>
                    <sv-button type="warning" round>警告按钮</sv-button>
                    <sv-button type="danger" round>警告按钮</sv-button>
                </div>
                <div class="sv-row">
                    <sv-button type="default" circle icon="sv-icon- icon-chenggong1"></sv-button>
                    <sv-button type="primary" circle icon="sv-icon- icon-chenggong1"></sv-button>
                    <sv-button type="success" circle icon="sv-icon- icon-chenggong1"></sv-button>
                    <sv-button type="info" circle icon="sv-icon- icon-chenggong1"></sv-button>
                    <sv-button type="warning" circle icon="sv-icon- icon-chenggong1"></sv-button>
                    <sv-button type="danger" circle icon="sv-icon- icon-chenggong1"></sv-button>
                </div>
            </div>
            
        </div>
        <div class="btn">
            <div style="margin:20px 0">
                <h3>禁用状态</h3>
                <p>按钮不可用状态</p>
            </div>
            <div class="sv-body">
                <div class="sv-row">
                    <sv-button type="default" disabled>默认按钮</sv-button>
                    <sv-button type="primary" disabled>主要按钮</sv-button>
                    <sv-button type="success" disabled>成功按钮</sv-button>
                    <sv-button type="info" disabled>信息按钮</sv-button>
                    <sv-button type="warning" disabled>警告按钮</sv-button>
                    <sv-button type="danger" disabled>警告按钮</sv-button>
                </div>
                <div class="sv-row">
                    <sv-button type="default" icon="sv-icon- icon-chenggong1" plain disabled>朴素按钮</sv-button>
                    <sv-button type="primary" plain disabled>主要按钮</sv-button>
                    <sv-button type="success" plain disabled>成功按钮</sv-button>
                    <sv-button type="info" plain disabled>信息按钮</sv-button>
                    <sv-button type="warning" plain disabled>警告按钮</sv-button>
                    <sv-button type="danger" plain disabled>警告按钮</sv-button>
                </div>
            </div>  
        </div>
          <div class="btn">
            <div style="margin:20px 0">
                <h3>文字按钮</h3>
                <p>没有边框和背景色的按钮</p>
            </div>
            <div class="sv-body">
                <div class="sv-row">
                    <sv-button type="text">文字按钮</sv-button>
                    <sv-button type="text" disabled>文字按钮</sv-button>
                </div>
            </div>  
        </div>
    </div>
</template>

<style lang="less">
  
    .btn{
        margin: 30px 0;
        .sv-body{
            border: 1px solid #eee;
            border-radius: 5px;
            width:960px;
            padding: 20px;
            .sv-row{
                // width:960px;
               sv-button{
                   float: left;
               }
            }
        }
    }
</style>