<template>
    <div>
        <el-sub-menu :index="menuInfo.path">
            <template #title>
                <el-tooltip :content="menuInfo.name" placement="right" effect="light">
                    <span>{{ menuInfo.name }}</span>
                </el-tooltip>
            </template>
            <template v-for="item in menuInfo.children" :key="item.path">
                <el-menu-item v-if="!item.children" :index="item.path">
                    <el-tooltip :content="item.name" placement="right" effect="light">
                        {{ item.name }}
                    </el-tooltip>
                </el-menu-item>
                <recursiveMenu v-else :menu-info="item"></recursiveMenu>
            </template>
        </el-sub-menu>
    </div>
</template>

<script setup lang="ts">
import recursiveMenu from './index.vue'
export interface MenuInfo {
    path: string
    name: string
    children?: Array<{
        path: string
        name: string
        children?: Array<{
            path: string
            name: string
        }>
    }>
}
export interface Props {
    menuInfo: MenuInfo
}
defineProps<Props>()
</script>

<style lang="scss" scoped>
.el-sub-menu__title span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>