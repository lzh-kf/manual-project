<template>
  <div class="container">
    <el-input type="textarea" v-model="value" :row="4" placeholder="请输入" size="small"></el-input>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '多行文本'
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 300px;
}
</style>
