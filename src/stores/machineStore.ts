import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { ListModel } from '@/type/ListType'
import type { MachineType } from '@/type/MachineType'

export const useMachineStore = defineStore('machine', () => {
  const machineList = ref<ListModel<MachineType>>({ data: [], total: 0 })

  return { machineList }
})
