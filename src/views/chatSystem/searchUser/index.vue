<template>
    <div>
        <el-form :inline="true" label-suffix=":">
            <el-form-item label="用户ID">
                <el-input v-model="queryParams.userId" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSearch()" :loading="loading">搜索</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData" v-loading="loading" style="width: 100%;height:100%;">
            <el-table-column type="index" min-width="50" label="序号" />
            <el-table-column prop="date" label="日期" />
            <el-table-column prop="state" label="所在州" />
            <el-table-column prop="city" label="城市" />
            <el-table-column prop="address" label="地址" />
            <el-table-column prop="zip" label="压缩类型" />
            <el-table-column prop="tag" label="标签" />
            <el-table-column label="操作">
                <template #default>
                    <el-button type="primary" size="default" @click="handleApply">申请好友</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="footer">
        </div>
    </div>
</template>

<script setup lang="ts">
import { useReactive } from '@/hooks/useState'
import useQuery from '@/hooks/useQuery'
import type { Api } from '@/hooks/useQuery'
const api: Api<{ userId: string }, { date: string }> = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                total: Math.floor(Math.random() * 1000),
                list: Array.from({ length: 10 }).map(() => {
                    return {
                        date: '2016-05-03',
                        name: 'Tom',
                        state: 'California',
                        city: 'Los Angeles',
                        address: 'No. 189, Grove St, Los Angeles',
                        zip: `CA 90036${new Date().getTime()}`,
                        tag: 'Home',
                    }
                })
            })
        }, 1500)
    })
}
const { loading, tableData, handleQuery } = useQuery(api)
const [queryParams, setQueryParams] = useReactive({
    userId: '',
    pageSize: 10,
    pageNum: 1
})

const handleSearch = () => {
    setQueryParams({
        ...queryParams,
        pageNum: 1
    })
    handleQuery(queryParams)
}

const handleApply = () => {
    ElMessage({
        type: 'success',
        message: '申请成功',
        duration: 10000
    })
}

handleQuery(queryParams)

</script>

<style lang="scss" scoped>
.footer {
    margin: 15px 0;
}
</style>