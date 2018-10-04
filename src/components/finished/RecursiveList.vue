<template>
  <ul class="recursive-list">
    <recursive-list-item v-for="(item, index) in filteredItems"
                         :key="index"
                         :item="item">

      <!-- We must bind the item, and this VNode -->
      <div class="node__content">
        <slot v-bind="{item, vnode: $vnode}">
          {{item.name}}
        </slot>
      </div>

      <recursive-list-node v-if="hasChildren"
          v-show="!collapsed"
          :item="item">

        <!-- Template must be present -->
        <template slot-scope="{item, vnode}">
          <slot v-bind="{item, vnode}">
            {{item.name}}
          </slot>
        </template>
      </recursive-list-node>


    </recursive-list-item>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import * as _ from 'lodash'
import RecursiveListItem from './RecursiveListItem.vue'
import RecursiveListNode from './RecursiveListNode.vue'
export default Vue.extend({
  name: 'RecursiveList',


  props: {

    // node represents the raw data of this item
    node: {
      type: Object,
      required: true
    },

    // Specifies what part of the node represents it's children
    // If children is a function, will act as a filter method
    childrenKey: {
      type: [String, Function],

      // most hierarchical data has 'children' as the key
      default() {
        return 'children'
      }
    }
  },

  data(): any {
    return {

      // This will toggle to show the subchildren
      collapsed: true
    }
  },

  components: {
    RecursiveListItem,
    RecursiveListNode
  },

  computed: {
    // rename, this is conflicting
    subNodes(): object[] | null {

      if (!this.node) return null

      if (typeof this.childrenKey === 'string') {
        return this.node[this.childrenKey]
      } else {
        return this.childrenKey.call(this, this.node)
      }
    },

    filteredItems(): object[] | null {
      return this.subNodes
    },

    hasChildren(): boolean {
      return !!this.subNodes
    }
  }
})
</script>


<style>
</style>
