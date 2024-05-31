import { useRef, useShallowRef } from './useState'

export interface Api<T1, T2> {
    (value: T1): Promise<{
        total: number
        list: Array<T2>
    }>
}

export interface TableDataType {
    name: string
    gg: number
    [key: string]: unknown
}

const useQuery = <T1, T2>(api: Api<T1, T2>) => {
    const [tableData, setTableData] = useShallowRef<Array<T2>>([])
    const [loading, setLoading] = useRef<boolean>(false)
    const [total, setTotal] = useRef<number>(0)
    const handleQuery = (params: T1) => {
        setLoading(true)
        api(params).then(res => {
            const { total, list } = res
            setTableData(list)
            setTotal(total)
        }).finally(() => {
            setLoading(false)
        })
    }
    return {
        total,
        loading,
        tableData,
        handleQuery
    }
}

export default useQuery