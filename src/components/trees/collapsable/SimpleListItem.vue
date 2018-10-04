<template>
  <!-- Main Entry -->
  <li class="list-item">

    <!-- Label -->
    <!-- Added click event -->
    <span class="list-item__label"
          @click="toggle">
      {{nodeData.name}} - {{nodeData.size ||
      nodeData.children.length}}
    </span>

    <!-- List for child nodes -->
    <!-- Show only if expanded is true -->
    <ul v-if="expanded">

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

  // !Added expanded var
  data() {
    return { expanded: false }
  },

  // ?The root node for this entry
  props: ['nodeData'],

  // ?Child nodes of root node
  computed: {
    nodes(): object[] | undefined {
      return this.nodeData.children
    }
  },

  // ? Add click event handler
  methods: {
    toggle(): void {
      this.expanded = !this.expanded
    }
  }
})
</script>
