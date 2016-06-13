<template>
    <li v-for="item in items">
        {{ item.message }}
    </li>
</template>
<script>
    var items = [
        { message: 'Foo' },
        { message: 'Bar' }
    ];
    module.exports = {
        data: function(){
            return items;
        }
    };
</script>