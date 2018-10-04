<template>
  <ul>
    <simple-list-item v-for="(node, index) in nodes"
                      :key="index"
                      :node-data="node" />
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import SimpleListItem from './SimpleListItem.vue'
export default Vue.extend({
  name: 'SimpleListBox',
  components: {
    SimpleListItem
  },
  // ? The root node for this entry
  props: ['nodeData'],

  // ? Child nodes of root node
  computed: {
    nodes(): object[] | undefined {
      return this.nodeData.children
    }
  }
})
</script>


<style>
</style>
