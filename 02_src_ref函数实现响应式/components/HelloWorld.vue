<template>
  <h1>初识vue3的setUp</h1>
  <h3>姓名:{{name }}</h3>
  <h3>年龄:{{ age}}</h3>
  <h1>对象响应式——————————————————</h1>
  <h3>姓名:{{job.typeNum}}</h3>
  <h3>年龄:{{job.salary}}</h3>
  <button @click="changeInfo">响应式修改值</button>
  
</template>
/**
 *响应式修改值，需要通过ref函数进行修改
*/
<script>
// 1.引入ref
 import {ref} from 'vue'
export default {
  name: 'HelloWorld',
  setup(){
    //2.调用ref函数。
   let name =ref('张三')
   let age = ref(18)
   let job = ref({
    typeNum:'前端工程师',
    salary:'30k'
   })
   
   //方法
   function changeInfo(){
    console.log(name,age)
    // 为什么加value呢？因为进过ref修改后的值会包装成一个对象，模板中不需要添加value了
      name.value ='李四'
      age.value = 20
      
      // 对象，第二层不需要.value,因为使用了proxy代理
      job.value.typeNum = 'UI设计师'
      job.value.salary = '60k'  
      //  console.log(job.value)
   }

   return{
    name,
    age,
    changeInfo,
    job
  }

  },
  
}
</script>


<style scoped>

</style>
