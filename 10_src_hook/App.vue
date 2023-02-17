<template>
  <button @click="isShowHelloWorld = !isShowHelloWorld">
    显示/隐藏HelloWorld组件
  </button>
  <HelloWorld v-if="isShowHelloWorld">
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
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    let isShowHelloWorld = ref(true)
    return {
      isShowHelloWorld

    }
  },

 


}
</script>

<style>

</style>
