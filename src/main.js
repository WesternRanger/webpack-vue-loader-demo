/**
 * Created by j-chenqi on 16-6-6.
 */

let Vue = require('vue');
let alert = require('./alert.vue');

Vue.config.silent = true; // 取消所有vue日志跟警告
//Vue.config.debug = false;

let cl111 = new Vue({
    el:'body',// 依附对象
    data:{
        name:'点击',
        flag:false//控制弹框出现
    },
    components:{//依赖组件
        'alert':alert
    },
    computed: {//控制弹框
        ok: function () {
            return this.flag;
        }
    },
    events: {//接受来自组件的消息
        'post-msg': function (msg) {
            this.flag = msg;
        }
    },
    methods:{//点击事件
        clickHandler:function(e){
            this.flag = true;
        }
    }
});