<template>
  <div class="page__end">

    <!-- Where the magic happens -->
    <list-item :node="FolderData">
      <template slot-scope="node">
        <span @click="onClick(node)">{{node.name}}</span>

        <!-- Show size if it has it, sure why not -->
        <span v-if="node.size">{{node.size}}</span>
      </template>
    </list-item>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListItem from './BasicListItem.vue'
import FolderData from '@/assets/data/flare.ts'

export default Vue.extend({
  data() {
    return {
      FolderData
    }
  },
  components: {
    ListItem
  },
  methods: {
    onClick(node: object): void {
      console.log('I was clicked!', node)
    }
  }
})
</script>


<style scoped lang="scss">
.page {
  &__end {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }
}
</style>
