<template>
  <li class="list-item">
    <slot v-bind="{node: nodeData, vnode: $vnode}">
      <span v-if="nodes"
            @click="onClick">[{{expanded ? '-' : '+'}}]
        {{nodeData.name}} ({{nodes.length}})</span>
      <span v-else>{{nodeData.name}} [{{nodeData.size}}]</span>
    </slot>

    <!-- Recursively render another tree within this tree item -->
    <ul v-show="expanded">
      <list-item v-for="(node, index) in nodes"
                 :node-data="node"
                 :key="index"
                 :child-key="childKey">

        <template slot-scope="data">
          <slot v-bind="data" />
        </template>

      </list-item>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ListItem',
  data() {
    return {
      expanded: false,
      recursive: false
    }
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
    onClick(e: MouseEvent) {
      this.recursive = e.altKey
      // if (!e.altKey) {
      this.expanded = !this.expanded
      // } else {
      // this.collapseAll = !this.collapseAll
      // }
    }
  },
  watch: {
    '$parent.recursive': {
      handler(val: boolean) {
        console.log('wtf')
        this.recursive = val
        this.expanded = val
      }
    }
  }
})
</script>


<style>
</style>
