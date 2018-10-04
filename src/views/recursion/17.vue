<template>
  <div class="image-filler">
    <recursive-list v-if="step > 1"
                    :node-data="FolderData">
      <!-- <template slot-scope="node"> -->
      <div class="temp"
           slot-scope="node">
        <img class="tiny"  src="@/assets/images/gifs/whoa.gif" :style="{opacity: node.children ? 1 : 0}">
        <div class="title">{{node.name}}</div>
      </div>
      <!-- </template> -->
    </recursive-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FolderData from '@/assets/data/flare.ts'

import RecursiveList from '@/components/trees/scopeable/index.vue'

export default Vue.extend({
  data() {
    return {
      FolderData
    }
  },

  components: {
    RecursiveList
  },

  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  }
})
</script>


<style scoped lang="scss">
.image-filler {
  display: flex;
  // align-items: center;
  // justify-content: center;

  .temp {
    padding: 10px;
    display: flex;
    align-items: center;

    img {
      width: 200px;
      height: auto;
    }

    .title {
      // position: absolute;
      font-size: 2em;
    }
  }

  /deep/ ul {
    list-style: none;
  }
}

.tiny {
  width: 30px;
  max-height: auto;
}
</style>
