<template>
  <ul class="recursive-list-node">
    
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    item: {
      type: Object,
      required: true
    },
    children: {
      type: Array
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
  }
})
</script>


<style>
</style>
