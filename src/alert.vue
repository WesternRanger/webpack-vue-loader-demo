<style>
    .alert-component{
        width:3rem;
        height:3rem;
        line-height: 3rem;
        text-align: center;
        border:#ff9da4 solid 1px;
        border-radius: 5px;
        position:fixed;
        left:50%;
        top:50%;
        margin:-1.5rem 0 0 -1.5rem;
        z-index:10001;
        background: #e0e0e0;
        font-size:0.3rem;
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
    <div class="alert-component">
        {{msg}}
    </div>
    <div class="mask" v-on:click="clickHandler"></div>
</template>
<script>
    module.exports ={
        data:function(){
            return {
                msg:['alert component'],
            };
        },
        methods:{
            clickHandler:function(e){
                this.$dispatch('post-msg', false);
            }
        }
    }

</script>