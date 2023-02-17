<template>
  <h1>reactive响应式</h1>
  <h3>姓名:{{job.name }}</h3>
  <h3>年龄:{{job.age}}</h3>
  <h1>对象响应式——————————————————</h1>
  <h3>姓名:{{job.typeNum}}</h3>
  <h3>年龄:{{job.salary}}</h3>
  <h3>显示c:{{ job.a.b.c }}</h3>
  <ul>
    <li v-for="(item,index) in job.hobby " :key="index">{{ item }}</li>
  </ul>
  <button @click="changeInfo">响应式修改值</button>
  
</template>

<script>
// 1.引入reactive
 import {reactive} from 'vue'
export default {
  name: 'HelloWorld',
  setup(){

  let job = reactive({
    name:'王五',
    age:18,
    typeNum:'前端工程师',
    salary:'30k',
    hobby :[1,2,3,'a'],
    a:{
      b:{
        c:'我是c'
      }
    }
   })
   
   //方法
   function changeInfo(){
    job.name = '张三22',
    console.log(job.name)
    job.hobby = ['a','b',3,'a']
    console.log(job.hobby)
    job.a.b.c = '我是cccccccc'
   }

   return{
    job,
    changeInfo,
  }

  },
  
}
</script>


<style scoped>

</style>
