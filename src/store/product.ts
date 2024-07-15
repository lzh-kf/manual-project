import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
const useProductStore = defineStore('product', () => {
    const productCount = ref(10)
    const productTotalPrice = computed(() => productCount.value * 10)
    const setProductCount = (val: number) => {
        productCount.value = val
    }
    return {
        productCount,
        setProductCount,
        productTotalPrice
    }
})
export default useProductStore