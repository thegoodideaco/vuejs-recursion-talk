<template>
  <!-- Main Entry -->
  <li class="list-item">

    <!-- Label -->
    <span class="list-item__label">
      {{nodeData.name}} - {{nodeData.size ||
      nodeData.children.length}}
    </span>

    <!-- List for child nodes -->
    <ul v-if="nodes">

      <!-- Recursion -->
      <li is="SimpleListItem"
          v-for="(node, index) in nodes"
          :key="index"
          :node-data="node" />
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

  // !Required for recursion
  name: 'SimpleListItem',

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
