/**
 * Created by j-chenqi on 16-6-6.
 */
let Vue = require('vue');
let Demo = require('./vue_demo.vue');
new Vue({
    el: "body",
    components: {
        Demo: Demo
    }
});
