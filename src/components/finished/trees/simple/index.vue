<template>
  <ul class="basic-tree">
    <list-item v-for="(node, index) in nodes"
               :key="index"
               :child-key="childKey"
               :node-data="node">

      <template slot-scope="{node, vnode}">
        <slot v-bind="{node, vnode}">
          <button :class="{expanded: vnode.componentInstance.expanded}"
                  @click="vnode.componentInstance.onClick($event)">{{node.name}}</button>
        </slot>
      </template>

    </list-item>
  </ul>
</template>

<script lang="ts">
import Vue, { VueConstructor, VNode } from 'vue'
import ListItem from './ListItem.vue'
export default Vue.extend({
  name: 'SimpleTree',

  components: {
    ListItem
  },
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
        return this.nodeData[this.childKey] as object[]
      }
    }
  },
  methods: {
    onClick(vnode: VNode) {
      console.log(vnode.componentInstance)
    }
  }
})
</script>


<style scoped lang="scss">
</style>
