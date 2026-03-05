<template>
  <div>
    <KitTable :actions="true">
      <template #header>
        <th>
          <span>name</span>
        </th>
        <th>
          <span>alias</span>
        </th>
      </template>
      <template #data>
        <tr v-for="(item, index) in machineList" :key="index">
          <td>
            {{ item.name }}
          </td>
          <td>
            {{ item.alias }}
          </td>
          <td>
            <div v-for="(actionItem, index) in actions" :key="index">
              <n-button @click="() => actionItem.function(item.id)">
                <div v-if="!!actionItem.icon">
                  <n-tooltip trigger="hover">
                    <template #trigger>
                      <component :is="actionItem.icon"> </component>
                    </template>
                    {{ actionItem.title }}
                  </n-tooltip>
                </div>
                <div v-else>
                  {{ actionItem.title }}
                </div>
              </n-button>
            </div>
          </td>
        </tr>
      </template>
    </KitTable>
  </div>
</template>

<script setup lang="ts">
import type { MachineType } from '@/type/MachineType'
import { computed, h } from 'vue'
import KitTable from '@/components/KitTable.vue'
import { NButton, NTooltip } from 'naive-ui'

const props = defineProps<{
  machines?: MachineType[]
}>()

const machineList = computed(() => props.machines)
const actions = [
  {
    title: 'Health Check',
    icon: () => h('i', { class: 'mdi mdi-wrench' }),
    function: (id: number) => checkMachineHealth(id),
  },
]

function checkMachineHealth(id: number) {
  console.log(id)
}
</script>

<style></style>
