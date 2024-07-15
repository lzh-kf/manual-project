<template>
  <div @drop="drop($event)" @dragover="allowDrop($event)" class="baseContainer">
    <div v-for="(item, index) in renderComponents" class="componentContainer"
      :style="{ width: item === 'baseContainer' ? '100%' : '' }">
      <component :key="index" :is="item"></component>
    </div>
  </div>
</template>
<script>
import serviceProviderName from './serviceProviderName.vue'
import vendorContact from './vendorContact.vue'
import serviceProviderPhone from './serviceProviderPhone.vue'
import currentDate from './currentDate.vue'
import vendorAddress from './vendorAddress.vue'
import singleLineInput from './singleLineInput.vue'
import multilineInput from './multilineInput.vue'
export default {
  name: 'baseContainer',
  components: {
    serviceProviderName,
    vendorContact,
    serviceProviderPhone,
    currentDate,
    vendorAddress,
    singleLineInput,
    multilineInput
  },
  data () {
    return {
      renderComponents: []
    }
  },
  methods: {
    drop (ev) {
      ev.preventDefault()
      ev.stopPropagation()
      const componentName = ev.dataTransfer.getData("componentName")
      this.renderComponents.push(componentName)
    },
    allowDrop (ev) {
      ev.preventDefault();
    }
  }
}
</script>
<style lang="scss" scoped>
.baseContainer {
  border: 1px solid #dcdfe6;
  min-height: 260px;
  min-width: 600px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.componentContainer {
  margin: 1%;
  display: flex;
}
</style>