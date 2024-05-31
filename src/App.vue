<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(456)
console.log(count)
</script>