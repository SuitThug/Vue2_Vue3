<template>
  <HelloWorld >
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

  }

}
</script>

<style>

</style>
