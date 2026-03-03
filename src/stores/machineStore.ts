import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMachineStore = defineStore('machine', () => {
  const machineList = ref([])

  return { machineList }
})
