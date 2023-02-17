<template>
     <h1>生命周期</h1>
     <h2>当前求和为：{{ sum }}</h2>
     <button @click="sum++">点我+1</button>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from 'vue'
export default {
     setup() {
          // 数据
          let sum = ref(0)
          // 组合式API实现生命周期
          //注意，beforeCreate与create相当于setup，所以不能在setup写
          onBeforeMount(() => {
               console.log("------onBeforeMount------")
          })
          onMounted(() => {
               console.log("------onMounted------")
          })
          onBeforeUpdate(() => {
               console.log("------onBeforeUpdate------")
          })
          onUpdated(() => {
               console.log("------onUpdated------")
          })
          onBeforeUnmount(() => {
               console.log("------onBeforeUnmount------")
          })
          onUnmounted(() => {
               console.log("------onUnmounted------")
          })
          return {
               sum,
          }


     },
     // 配置项形式写生命周期
     //#region 
     /*   beforeCreate() {
            console.log('------beforeCreate----')
       },
       created() {
            console.log('------created----')
       },
       beforeMount() {
            console.log('------beforeMount----')
       },
       mounted() {
            console.log('------mounted----')
       },
       beforeUpdate() {
            console.log('------beforeUpdate----')
       },
       updated() {
            console.log('------updated----')
       },
  
       // 不同点:改名字了
       beforeUnmount() {
            console.log('-----beforeUnmount-----')
       },
       unmounted() {
            console.log('------unmounted----')
       }, */
     //#endregion
}
</script>


<style scoped>

</style>
