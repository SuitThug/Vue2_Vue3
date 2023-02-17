<template>
     {{ person }}<br />
     <h2>当前求和为：{{ sum }}</h2>
     <button @click="sum++">点我+1</button>
     <hr />
     <h2>姓名：{{ name }}</h2>
     <h2>姓名：{{ age }}</h2>
     <h2>嵌套：{{ person.a.b.c }}</h2>
     <button @click="name += '!'">名字变化</button>
     <button @click="age++">点我年龄增长1</button>
     <button @click="person.a.b.c += '~'">嵌套变化</button>
</template>

<script>
/**
 * toRef与toRefs都是为了简化模板的后缀操作
 * toRef，只能操作一个，toRefs能操作一整个对象
 */

import { reactive, ref, toRef, toRefs } from 'vue'
export default {
     setup() {
          // 数据
          let sum = ref(0)
          let person = reactive({
               name: '李四',
               age: 18,
               a: {
                    b: {
                         c: '我是多重嵌套的c'
                    }
               }
          })
          return {
               sum,
               person,
               // name: toRef(person, 'name'),
               // age: toRef(person, 'age'),
               // c: toRef(person.a.b, 'c')
               // 多层嵌套在模板还是得通过点的形式获取值
               ...toRefs(person)
             

          }
     }

}
</script>


<style scoped>

</style>
