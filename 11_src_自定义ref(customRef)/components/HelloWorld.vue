<template>
     <input type="text" v-model="keyWord" />
     <div>{{ keyWord }}</div>
</template>

<script>


import { customRef } from 'vue'
export default {
     setup() {
          // 自定义一个ref -- 名为:myRef
          function myRef(value,delay) {
               let timer
               return customRef((track, trigger) => {
                    return {
                         get() {
                              console.log(`有人从myRef读取了数据,我把${value}给他了`)
                              track() //通知vue追踪value的变化(提前和get商量一下,让他认为这个value是有用的)
                              return value
                         },
                         set(newValue) {
                              clearTimeout(timer)
                              console.log(`有人修改了myRef的数据，改为了${newValue}`)
                              timer = setTimeout(() => {
                                   value = newValue
                                   trigger() //通知模板去解析
                              },delay)
                         }
                    }
               })
          }

          let keyWord = myRef('hello',500);

          return {
               keyWord
          }

     }

}
</script>


<style scoped>

</style>
