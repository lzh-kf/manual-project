<template>
    <div>
        <el-scrollbar height="100vh">
            <customMenu :menus="menus"></customMenu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
import { useRef } from '@/hooks/useState'
import customMenu from './components/menu/index.vue'
export interface MenuInfo {
    path: string
    name: string
    children?: undefined | Array<MenuInfo>
}
const baseUrl = '/main-content'
const [menus] = useRef<Array<MenuInfo>>([
    {
        path: baseUrl,
        name: '首页'
    },
    {
        path: '/authorityManagement',
        name: '权限管理',
        children: [
            {
                path: `${baseUrl}/menuManagement`,
                name: '菜单管理'
            },
            {
                path: `${baseUrl}/interfaceManagement`,
                name: '接口管理'
            },
            {
                path: `${baseUrl}/roleManagement`,
                name: '角色管理'
            },
            {
                path: `${baseUrl}/userManagement`,
                name: '用户管理'
            }
        ]
    },
    {
        path: `${baseUrl}/orderManagement`,
        name: '订单管理'
    },
    {
        path: `${baseUrl}/editor`,
        name: '富文本编辑'
    },
    {
        path: `${baseUrl}/personCenter`,
        name: '个人中心'
    },
    {
        path: 'chatSystem',
        name: '聊天系统',
        children: [
            {
                path: `${baseUrl}/searchUser`,
                name: '搜索用户'
            },
            {
                path: `${baseUrl}/friendRequest`,
                name: '好友申请'
            },
            {
                path: `${baseUrl}/friendList`,
                name: '好友列表'
            }
        ]
    },
    {
        path: `${baseUrl}/canvas`,
        name: '画布'
    },
])
</script>

<style scoped></style>