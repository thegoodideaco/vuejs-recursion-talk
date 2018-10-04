<template>
  <div class="image-filler">
    <img src="@/assets/images/gifs/r1.gif">
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
