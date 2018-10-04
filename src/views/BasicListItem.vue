<template>
  <li>
    <slot v-bind="node">
      {{node.name}}
    </slot>

    <ul v-if="node.children">
      <recursive-item v-for="(item, index) in node.children"
                      :key="index"
                      :node="item">

                      <template slot-scope="node">
                        <slot v-bind="node"/>
                      </template>

      </recursive-item>
    </ul>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'RecursiveItem',
  props: ['node']
})
</script>


<style>
</style>
