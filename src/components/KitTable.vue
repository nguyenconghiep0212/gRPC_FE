<template>
  <div>
    <n-table>
      <thead>
        <tr>
          <slot name="header"></slot>
          <th v-if="props.actions">
            <slot name="action_title">
              <span> Actions </span>
            </slot>
          </th>
        </tr>
      </thead>
      <tbody>
        <slot name="data"> </slot>
      </tbody>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { NTable } from 'naive-ui'

type Data = {
  value: string
  title: string
}

const props = defineProps<{
  data?: Data[]
  actions?: boolean
}>()
</script>
