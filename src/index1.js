/**
 * Created by WesternRanger on 16/6/13.
 */
var Vue = require('vue'),
    confirm = require('./confirm.vue'),
    $window = document.querySelector('html'),
    $body = document.querySelector('body');

Vue.config.silent = true; // 取消所有vue日志跟警告
//Vue.config.debug = false;
var demoArr = [
    { message: 'Foo1' },
    { message: 'Foo3' },
    { message: 'Foo4' },
    { message: 'Foo4' },
    { message: 'Foo4' },
    { message: 'Foo4' },
    { message: 'Foo4' },
    { message: 'Foo4' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo5' },
    { message: 'Foo6' },
    { message: 'Bar7' }
];

let cl111 = new Vue({
    el: 'body',// 依附对象
    data: {
        name: '点击',
        flag: false,//控制弹框出现
        items: demoArr
    },
    components: {//依赖组件
        'confirm': confirm
    },
    events: {//接受来自组件的消息
        'confirm-msg': function (msg) {
            //debugger;
            this.flag = msg.closeConfirm;//关闭弹框-false

            $window.className='';
            $body.className='';

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
            $window.className='fullMask';
            $body.className='fullMask';
            this.flag = true;

        }
    }
});