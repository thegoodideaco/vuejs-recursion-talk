<template>
  <div class="image-filler">
    <img v-if="step < 4" src="@/assets/images/gifs/r8.gif">

    <div v-else
         class="list-container">
      <list-box :node-data="flareData">

      </list-box>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListBox from '@/components/trees/simple/index.vue'
// import ListItem from '@/components/finished/trees/simple/ListItem.vue'

import flareData from '@/assets/data/flare.ts'

export default Vue.extend({
  data() {
    return {
      flareData
    }
  },
  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  },
  components: {
    ListBox
  }
})
</script>


<style scoped lang="scss">
.image-filler {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    min-width: 70%;
    height: auto;
  }
}

.list-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
}
</style>
