<template>
  <div class="section__page">

    <!-- Markdown -->
    <markdown-display :content="test"
                      :step="$store.state.currentStep-1"
                      :key="$store.state.section" />

    <!-- Main Content Container -->
    <div class="main__display__content">

      <router-view class="fill" />
    </div>
  </div>
</template>

<script lang="ts">
import marked from 'marked'
import BasicSlotExample from '@/components/BasicSlotExample.vue'
import MarkdownDisplay from '@/components/MarkdownDisplay.vue'
import Vue from 'vue'



export default Vue.extend({
  components: {
    BasicSlotExample,
    // TopHeader,
    MarkdownDisplay
  },
  props: ['section'],
  data() {
    return {
      test: undefined as string | undefined,
      step: 0
    }
  },
  watch: {
    '$store.state.section': {
      handler(val: number) {
        console.log('reloading markdown')
        this.test = ''
        this.$http(`/markdown/sections/${val}.md`).then((res) => {
          this.test = marked.parse(res.data)
        })
      },
      immediate: true
    }
  }
})
</script>

<style lang="scss" scoped>
// .section {
//   height: 100vh;
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: stretch;
// }

.markdown {
  width: 40%;
  // overflow: hidden;
}

.section__page {
  height: 100%;
  color: rgb(47, 255, 163);
  background-color: rgb(50, 70, 90);
  display: flex;
}

.main__display__content {
  overflow-y: auto;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

