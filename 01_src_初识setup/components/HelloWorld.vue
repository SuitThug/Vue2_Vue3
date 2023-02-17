<template>
  <h1>初识vue3的setUp</h1>
  <h3>姓名:{{name }}</h3>
  <h3>年龄:{{ age}}</h3>
  <button @click="sayHello">说话</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  setup(){
   let name = '张三'
   let age = 18
   
   //方法
   function sayHello(){
    alert(`我叫${name},今年${age}岁了`)
   }

   return{
    name,
    age,
    sayHello
  }

  },
  
}
</script>


<style scoped>

</style>
