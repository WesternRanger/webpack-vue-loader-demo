<style>
     h2{
         color: red;
     }
 </style>
 <template>
     <h2>hello, {{name}}</h2>
 </template>
 <script>
     //  构造弹窗组件
     module.exports = {
         data: function(){
             return {
                 name: "western-ranger"
             };
         }
     };
 </script>