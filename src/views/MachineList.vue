<template>
  <div>
    <span>Device List</span>
    <div class="space-y-1">
      <div v-for="(item, key) in machineStore.machineList" :key="key">
        <MachineCard :machine="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { MachineListAsync } from '@/api/Machine/index'
import { useMachineStore } from '@/stores/machineStore'
import MachineCard from '@/components/MachineCard.vue'
import type { AxiosBody } from '@/type/Axios'

onMounted(() => {
  GetMachineList()
})

const machineStore = useMachineStore()
async function GetMachineList() {
  const param: AxiosBody = {
    limit: 10,
    offset: 0,
  }
  const res = await MachineListAsync(param)
  if (res) {
    machineStore.machineList = res
  }
}
</script>
