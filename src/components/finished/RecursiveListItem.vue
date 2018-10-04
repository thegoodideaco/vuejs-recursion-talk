<template>
  <li class="recursive-list-item">
    <slot v-bind="{item, vnode: $vnode}">
      Hello World
    </slot>

    
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import RecursiveListNode from './RecursiveListNode.vue'
export default Vue.extend({
  name: 'RecursiveListItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    RecursiveListNode
  }
})
</script>


<style>
</style>
