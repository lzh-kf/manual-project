<template>
    <div class="main-content">
        <el-container>
            <el-aside class="side">
                <customSide></customSide>
            </el-aside>
            <el-container>
                <el-main class="main">
                    <el-scrollbar>
                        <router-view v-slot="{ Component }">
                            <transition>
                                <keep-alive>
                                    <component :is="Component" />
                                </keep-alive>
                            </transition>
                        </router-view>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import customSide from './components/side/index.vue'
</script>

<style lang="scss" scoped>
.main-content {
    height: 100%;
    width: 100%;
}

.side {
    width: 200px;
    height: 100vh;
}

.main {
    height: 100vh;
}
</style>