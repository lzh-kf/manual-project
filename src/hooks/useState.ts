import { ref, reactive, shallowRef, shallowReactive } from 'vue'
import type { Ref, UnwrapRef, ShallowRef, UnwrapNestedRefs, ShallowReactive } from 'vue'

type ResultRef<T> = [Ref<UnwrapRef<T>>, { (val: T): void }]

type ResultShallowRef<T> = [ShallowRef<T>, { (val: T): void }]

type ResultReactive<T> = [UnwrapNestedRefs<T>, { (val: T): void }]

type ResultShallReactive<T> = [ShallowReactive<T>, { (val: T): void }]

const useRef = <T>(v: T): ResultRef<T> => {
    const value = ref(v)
    const setValue = (val: T) => {
        value.value = val as UnwrapRef<T>
    }
    return [value, setValue]
}

const useShallowRef = <T>(v: T): ResultShallowRef<T> => {
    const value = shallowRef(v)
    const setValue = (val: T) => {
        value.value = val
    }
    return [value, setValue]
}

const useReactive = <T extends object>(v: T): ResultReactive<T> => {
    const value = reactive(v)
    const setValue = (val: object) => {
        Object.assign(value, val)
    }
    return [value, setValue]
}

const useShallowReactive = <T extends object>(v: T): ResultShallReactive<T> => {
    const value = shallowReactive(v)
    const setValue = (val: object) => {
        Object.assign(value, val)
    }
    return [value, setValue]
}

export { useRef, useShallowRef, useReactive, useShallowReactive }