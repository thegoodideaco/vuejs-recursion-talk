<template>
  <div class="simple-panel">

    <div class="simple-panel__header">Panel Title</div>

    <div class="simple-panel__body">
      Content goes here
    </div>

    <div class="simple-panel__footer">Panel Footer</div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SimplePanel'
})
</script>


<style scoped lang="scss">
.simple-panel {
  background: #fff;
  box-shadow: 0 0 3px rgba(#000, 0.5);
  border-radius: 4px;

  &__header {
    padding: 10px 15px;
    background-color: blue;
    color: #fff;
  }

  &__body {
    padding: 15px;
  }
}
</style>
