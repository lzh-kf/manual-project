import { onMounted, onUnmounted } from 'vue'
const useListerEvent = (methodName: string, callback: { (): void }) => {
    const tempData = callback
    onMounted(() => {
        window.addEventListener(methodName, tempData)
    })
    onUnmounted(() => {
        window.removeEventListener(methodName, tempData)
    })
}

export default useListerEvent