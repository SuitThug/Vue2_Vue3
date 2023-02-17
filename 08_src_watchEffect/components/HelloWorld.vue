<template>
     <h1>watch内容</h1>
     <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
   <hr/>
    <h2>姓名：{{person.name.n.a}}</h2>
    <h2>姓名：{{person.age}}</h2>
    <button @click="person.name.n.a+='!'">名字变化</button>
    <button @click="person.age++">点我年龄增长1</button>
</template>

<script>
import { reactive,ref, watchEffect} from 'vue'
export default {
     setup(){
      // 数据
      let sum=ref(0)
      let person = reactive({
           name:{
             n:{
               a:'李四'
             }
           },
           age:18,
          
      })
      // 在watcheffect里面定义的值会被监听到，谁用监听谁
      watchEffect(()=>{
            const x1 = sum.value;
            const x2 = person.name.n.a
            console.log('watchEffect侦听器被触发了')
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
