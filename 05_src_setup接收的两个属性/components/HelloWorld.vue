<template>
   <h1>{{msg }}</h1>
   <h1>{{name}}</h1>
   <button @click="test">触发按钮给父组件传值</button>
  
</template>

<script>

export default {
    props:['msg','name'],
    emits:['demo'],  //触发了哪些事件
    setup(props,context) { //context里面包含了emit方法
       console.log(props)
       console.log(context)
       console.log(context.slots)
       function test(){
          context.emit('demo',66666)
       }
       return{
       test
        }
    },
    
}
</script>


<style scoped>

</style>
