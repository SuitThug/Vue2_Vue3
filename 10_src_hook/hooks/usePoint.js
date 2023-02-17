import { reactive, onMounted, onUnmounted } from "vue"

export default function () {
    let point = reactive({
        x: 0,
        y: 0
    })
    //方法
    function savePoint(e) {
        console.log(e.pageX)
        console.log(e.pageY)
        point.x = e.pageX
        point.y = e.pageY
    }
    onMounted(() => {
        window.addEventListener('click', savePoint)

    }),

        onUnmounted(() => {
            //优化,组件卸载时，关闭监听事件,接收两个参数：移除的事件,移除的事件回调
            window.removeEventListener('click', savePoint)
        })

    return point    
}