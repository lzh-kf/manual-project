<template>
    <div>
        <el-menu :default-active="route.path" :router="true" class="custom-menu">
            <template v-for="item in menus" :key="item.apth">
                <el-menu-item :index="item.path" v-if="!item.children">
                    <el-tooltip :content="item.name" placement="right" effect="light">
                        <span>{{ item.name }}</span>
                    </el-tooltip>
                </el-menu-item>
                <subMenu v-else :menuInfo="item"></subMenu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import subMenu from '../subMenu/index.vue'
export interface MenuInfo {
    path: string
    name: string
    children?: undefined | Array<MenuInfo>
}
export interface Props {
    menus: Array<MenuInfo>
}
const route = useRoute()
defineProps<Props>()
</script>

<style lang="scss" scoped>
.custom-menu {
    height: 100vh;
}

.el-menu-item span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>