<template>
  <div class="index">
    <list class="list"></list>
    <div class="baseContainer">
      <h3>布局容器</h3>
      <baseContainer></baseContainer>
    </div>
  </div>
</template>

<script>
import list from './components/list.vue'
import baseContainer from './components/baseContainer.vue'
export default {
  components: {
    list,
    baseContainer
  }
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;

  .list {
    width: 500px;
    height: 100%
  }

  .baseContainer {
    width:800px;
    flex-wrap: wrap;
  }
}
</style>