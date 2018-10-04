<template>
  <div class="first-section">

    <!-- Without a scoped slot, this just displays name -->
    <recursive-list v-if="false" :node="flareData">
      <template slot-scope="{item, vnode}">
        <span @click="vnode.componentInstance.collapsed = !vnode.componentInstance.collapsed">click
          me {{item.name}}</span>
      </template>
    </recursive-list>

    <simple-tree :node-data="flareData">
      <!-- No custom slots for you -->
    </simple-tree>

    <!-- <slot-tree :node-data="flareData">
      <template slot-scope="n">
        Hello {{n}}
      </template>
    </slot-tree>

    <advanced-slot-tree :node-data="flareData">
      <template slot-scope="n">
        Hello {{n}}
      </template>
    </advanced-slot-tree> -->

  </div>
</template>

<script lang="ts">
interface ListData {
  item: object,
  vnode: VNode
}

import Vue, { VueConstructor, VNode, VNodeData } from 'vue'
import RecursiveList from '@/components/finished/RecursiveList.vue'
import SimpleTree from '@/components/finished/trees/simple/index.vue'
import SlotTree from '@/components/finished/trees/slots/index.vue'
import AdvancedSlotTree from '@/components/finished/trees/advanced-slots/index.vue'

import flareData from '@/assets/data/flare.ts'

export default Vue.extend({
  data() {
    return {
      flareData
    }
  },
  props: ['step'],
  components: {
    RecursiveList,
    SimpleTree,
    SlotTree,
    AdvancedSlotTree
  },
  methods: {
    onClick({ item, vnode }: ListData): void {
      const component = vnode.componentInstance as any
      const collapsed = component.collapsed
      if (component) this.$set(component, 'collapsed', !collapsed)

      console.log(component)
    }
  }
})
</script>


<style scoped lang="scss">
h1 {
  margin: 20px 0;
}

.first-section {
  display: flex;
  // flex-flow: column nowrap;
}
</style>
