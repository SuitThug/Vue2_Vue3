<template>
   <input v-model="person.firstName"/><br/><br/>
   <input v-model="person.lastName"/><br/><br/>
   全名:<span>{{ person.fullName}}</span><br/><br/>
   全名修改：<input v-model="person.fullName"/><br/><br/>
</template>

<script>
import { reactive,computed } from 'vue'
export default {
     setup(){
      // 数据
      let person = reactive({
         firstName:'张',
         lastName:'三'
      })

       //计算属性-简写，没有考虑计算属性被修改的情况
      //  person.fullName = computed(()=>{
      //    return person.firstName + '-' + person.lastName
      //  })
         
         // 完整写法
         person.fullName = computed({
            get(){
               return person.firstName + '-' + person.lastName
            },
            set(value){
                console.log(value)
                const nameArr = value.split('-')
                console.log(nameArr)
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]

            }
         })

      return {
          person,
    
      }
     }
    
}
</script>


<style scoped>

</style>
