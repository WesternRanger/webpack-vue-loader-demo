<style>

    .ncf-confirm{
        width:4.5rem;
        text-align: center;
        border-radius: 5px;
        position:fixed;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        z-index:10001;
        background: #fff;
        font-size:0.3rem;
    }
    .conf-cont {
        width:3.9rem;
        padding:0.3rem;
    }
    .conf-btn-grp{
        display: flex;
        justify-content: center;
        border-top:#e5e5e5 solid 1px;
    }
    .conf-cancel{
        flex:1;
        padding:0.15rem 0;
        border-right:1px solid #e5e5e5;
    }
    .conf-sure{
        flex:1;
        padding:0.15rem 0;
    }
    .mask{
        position: fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background:rgba(0,0,0,0.5);
        z-index:10000;
    }
</style>
<template>
    <div class="ncf-confirm">
        <div class="conf-cont">{{msg}}<br>{{propmsg}}</div>
        <div class="conf-btn-grp">
            <div class="conf-cancel" v-on:click="doCancel" v-if="isCancel">取消</div>
            <div class="conf-sure" v-on:click="doSure" v-if="isSure">确定</div>
        </div>
    </div>
    <div class="mask" v-on:click="clickHandler"></div>
</template>
<script>

    let maskMsg = {
            closeConfirm:false,
        },
        cancelMsg = {
            closeConfirm:false,
            cancelCallback:function(){
                console.log('cancel');
            }
        },
        sureMsg = {
            closeConfirm:false,
            sureCallback:function(){
                console.log('sure');
            }
        };

    module.exports ={
        data:function(){
            return {// 使用props获取属性来覆盖
                msg:['confirm component'],
                canc:1,
                sure:0
            };
        },
        props:['canc','sure','msg'],
        computed:{//渲染取消确定按钮
            isCancel:function(){
                return this.canc;
            },
            isSure:function(){
                return this.sure;
            }
        },
        methods:{
            clickHandler:function(e){//隐藏
                this.$dispatch('confirm-msg', maskMsg);
            },
            doCancel:function(){//点击取消
                this.$dispatch('confirm-msg', cancelMsg);
            },
            doSure:function(){//点击确定
                this.$dispatch('confirm-msg', sureMsg);
            }
        }
    }

</script>