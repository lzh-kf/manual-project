<template>
  <div class="container">
    <el-input v-model="value" placeholder="请输入" size="small"></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '单行文本'
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 300px;
}
</style>