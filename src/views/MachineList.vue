<template>
  <div>
    <div>
      <n-card> </n-card>
    </div>
    <div>
      <n-card>
        <div class="card_title">Machine List</div>
        <MachineCard :machines="machineStore.machineList" />
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { MachineListAsync } from '@/api/Machine/index'
import { useMachineStore } from '@/stores/machineStore'
import MachineCard from '@/components/MachineCard.vue'
import type { AxiosBody } from '@/type/Axios'
import { NCard } from 'naive-ui'

onMounted(() => {
  GetMachineList()
})

const machineStore = useMachineStore()
const filter = ref({
  name: '',
  alias: '',
  vendor: null,
  project: null,
  site: null,
})

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
