<template>
  <div class="image-filler">
    <img v-if="step < 6" src="@/assets/images/11.png">
    <img class="vert" v-else src="@/assets/images/11-2.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ListBox from '@/components/trees/collapsable/index.vue'
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
  padding: 30px;

  img {
    // min-width: 70%;
    min-height: 100%;
    width: auto;
  }

  .vert {
    // max-height: 100%;
    max-width: 100%;
    width: auto;
  }
}
</style>
