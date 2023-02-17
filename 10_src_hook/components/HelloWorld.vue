<template>
     <h1>hook函数</h1>
     <h1>当前鼠标点击的坐标为x:{{ point.x }},y:{{ point.y }}</h1>
</template>

<script>
import usePoint from '../hooks/usePoint'
export default {
     setup() {
          // 调用hooks封装的函数
          let point = usePoint()


          return {
               point
          }

     },

}
</script>


<style scoped>

</style>
