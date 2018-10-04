<template>
  <ul>
    <simple-list-item v-for="(node, index) in nodes"
                      :key="index"
                      :node-data="node">

                     <template slot-scope="subNode">
                        <!-- The wrapper slot -->
                      <slot v-bind="subNode">
                        Replace Me!
                      </slot>
                     </template>

    </simple-list-item>
  </ul>
</template>

<script lang="ts">

// ! this is our root container
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
