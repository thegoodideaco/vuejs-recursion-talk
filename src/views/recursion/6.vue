<template>
  <div class="image-filler">
     <img v-if="step < 6" src="@/assets/images/6-2.png">
    <img v-else src="@/assets/images/6-2-1.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
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
  align-items: center;
  justify-content: center;

  img {
    min-width: 70%;
    height: auto;
  }
}
</style>
