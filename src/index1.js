/**
 * Created by WesternRanger on 16/6/13.
 */
let Vue = require('vue');
let confirm = require('./confirm.vue');

Vue.config.silent = true; // 取消所有vue日志跟警告
//Vue.config.debug = false;

let cl111 = new Vue({
    el: 'body',// 依附对象
    data: {
        name: '点击',
        flag: false,//控制弹框出现
    },
    components: {//依赖组件
        'confirm': confirm
    },
    computed: {//控制弹框
        ok: function () {
            return this.flag;
        }
    },
    events: {//接受来自组件的消息
        'confirm-msg': function (msg) {
            //debugger;
            this.flag = msg.closeConfirm;
            if(msg.cancelCallback){//点击取消
                console.log(4444)
            }
            if(msg.sureCallback){//点击确定
                msg.sureCallback();
            }
        }
    },
    methods: {//点击事件
        clickHandler: function (e) {
            //debugger;
            this.flag = true;
        }
    }
});