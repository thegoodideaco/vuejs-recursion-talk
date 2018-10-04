<template>
  <div class="panel-component-section">
    <img v-if="step < 6" src="@/assets/images/6-2.png">
    <img v-else src="@/assets/images/6-2-1.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SimplePanel from '@/components/finished/SimplePanel.vue'
import SimpleButton from '@/components/finished/SimpleButton.vue'
export default Vue.extend({
  props: ['step'],
  computed: {
    section(): number {
      return this.$store.state.section
    }
  },
  components: {
    SimplePanel,
    SimpleButton
  }
})
</script>


<style scoped lang="scss">
.simple-panel {
  min-width: 50%;
  min-height: 50%;

  /deep/ &__body {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
