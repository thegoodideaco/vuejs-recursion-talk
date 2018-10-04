<template>
  <ul class="basic-tree">
    <li v-for="(node, index) in nodes"
        :key="index">
      {{node.name}}

      <slot-tree :node-data="node"
                   :child-key="childKey">

      </slot-tree>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SlotTree',
  props: {
    nodeData: {
      type: Object,
      required: true
    },
    childKey: {
      type: [String, Function],
      default: 'children'
    }
  },
  computed: {
    nodes(): object[] | undefined {
      if (typeof this.childKey === 'function') {
        return this.childKey.call(this, this.nodeData)
      } else if (typeof this.childKey === 'string') {
        return this.nodeData[this.childKey]
      }
    }
  }
})
</script>


<style scoped lang="scss">
</style>
