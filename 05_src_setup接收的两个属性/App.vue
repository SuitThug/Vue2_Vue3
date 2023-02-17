<template>
  <HelloWorld msg="Welcome to Your Vue.js App" name="我是父组件的张三" @demo="demoHello">
    <template v-slot:qwe>
      <span>我是插槽</span>
   </template>
   <!-- #是语法糖 -->
   <template #abc>
      <span>我是插槽</span>
   </template>
  </HelloWorld>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    function demoHello(value){
       alert(`你好啊，你触发了demo事件，我收到的参数是${value}`)
    }

    return{
      demoHello
    }
  }

}
</script>

<style>

</style>
