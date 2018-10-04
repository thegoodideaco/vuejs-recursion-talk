<template>
  <div class="image-filler">
    <img src="@/assets/images/gifs/r3.gif">
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

  img {
    min-width: 70%;
    height: auto;
  }
}
</style>
