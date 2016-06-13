<style>
     h2{
         color: red;
     }
 </style>
 <template>
     <h2>hello, {{name}}</h2>
     <input v-model="name">
     <ul>
         <li v-for="item in items">
             {{ item.message }}
         </li>
     </ul>
 </template>
 <script>
     //  构造弹窗组件
     module.exports = {
         data: function(){
             return {
                 name: "western-ranger",
                 items: [
                     { message: 'Foo1' },
                     { message: 'Foo3' },
                     { message: 'Foo4' },
                     { message: 'Foo4' },
                     { message: 'Foo4' },
                     { message: 'Foo4' },
                     { message: 'Foo4' },
                     { message: 'Foo4' },
                     { message: 'Foo5' },
                     { message: 'Foo6' },
                     { message: 'Bar7' }
                 ]
             };
         }
     };
 </script>