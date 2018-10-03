<template>
  <ul class="recursive-list">
    <li v-for="(item, index) in filteredItems"
        :key="index">
      <slot>
        Hello There
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import * as _ from 'lodash'
export default Vue.extend({
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

  computed: {
    childNodes(): object[] | null {
      if (typeof this.childrenKey === 'string') {
        return this.node[this.childrenKey]
      } else {
        return this.childrenKey.call(this, this.node)
      }
    }
  }
})
</script>


<style>
</style>
