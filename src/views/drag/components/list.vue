<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.title">
        <h3>{{ item.title }}</h3>
        <ul class="list">
          <li v-for="componentInfo in item.list" :key="item.componentName" class="item" :draggable="true"
            @dragstart="drag($event, componentInfo)">
            <span>{{ componentInfo.name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '业务组件',
          list: [
            {
              name: '服务商名称',
              componentName: 'serviceProviderName'
            },
            {
              name: '服务商联系人',
              componentName: 'vendorContact'
            },
            {
              name: '服务商电话',
              componentName: 'serviceProviderPhone'
            },
            {
              name: '当前日期',
              componentName: 'currentDate'
            }, {
              name: '服务商地址',
              componentName: 'vendorAddress'
            }
          ]
        },
        {
          title: '容器组件',
          list: [
            {
              name: '基础容器',
              componentName: 'baseContainer'
            }
          ]
        },
        {
          title: '输入组件',
          list: [
            {
              name: '单行输入',
              componentName: 'singleLineInput'
            },
            {
              name: '多行输入',
              componentName: 'multilineInput'
            }
          ]
        }
      ]
    }
  },
  methods: {
    drag (ev, { componentName }) {
      ev.dataTransfer.setData("componentName", componentName)
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 100px;
  height: 60px;
  margin: 10px;
  border: 1px solid #dcdfe6;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 12px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>