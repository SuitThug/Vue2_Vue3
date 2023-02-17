<template>
     <h1>watch内容</h1>
     <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
   <hr/>
    <h2>姓名：{{person.name}}</h2>
    <h2>姓名：{{person.age}}</h2>
    <button @click="person.name+='!'">名字变化</button>
    <button @click="person.age++">点我年龄增长1</button>
</template>

<script>
import { reactive,watch,ref} from 'vue'
export default {
     setup(){
      // 数据
      let sum=ref(0)
      let person = reactive({
           name:'李四',
           age:18
      })
      //  监听ref声明的值，能监听到新旧值变化的不同
      watch(sum,(newValue,oldValue)=>{
         console.log("sum发生变化了",newValue,oldValue)
      })
      //侦听reactive声明的值，监听到的新旧值一样
      watch(person,(newValue,oldValue)=>{
         console.log("person发生变化了",newValue,oldValue)
      })
      return{
         sum,
         person
      }
     }
    
}
</script>


<style scoped>

</style>
