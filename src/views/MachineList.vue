<template>
  <div>
    <div class="space-y-2">
      <n-card>
        <div class="card_title">Filter</div>
        <div class="space-y-2">
          <div class="grid grid-cols-2 gap-2">
            <n-input v-model:value="filter.name" type="text" placeholder="Name..." />
            <n-input v-model:value="filter.alias" type="text" placeholder="Alias..." />
          </div>
          <div class="grid grid-cols-2 gap-2">
            <n-select v-model:value="filter.vendor" multiple filterable placeholder="Vendors..."
              :options="vendorOptions" />
            <n-input v-model:value="filter.name" type="text" placeholder="Machine alias..." />
          </div>
        </div>
        <div class="flex justify-end mt-4">
          <n-button type="primary" @click="ApplyFilter">
            Apply
          </n-button>
        </div>
      </n-card>
      <n-card>
        <div class="card_title">Machine List</div>
        <MachineCard :machines="machineStore.machineList" @emitPageSizeChange="onPageSizeChange" />

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
import { NCard, NInput, NButton, NSelect } from 'naive-ui'
import type { ListModel } from '@/type/ListType'
import type { MachineType } from '@/type/MachineType'
import type { VendorType } from '@/type/vendorType'
import { VendorListAsync } from '@/api/vendor'

onMounted(() => {
  GetMachineList()
  GetVendorList()
})

const machineStore = useMachineStore()
const filter = ref({
  name: '',
  alias: '',
  vendor: [],
  project: [],
  site: [],
  isOnline: false,
})
const vendorOptions = ref<{ label: string, value: number }[]>([])

function onPageSizeChange(event: number) {
  console.log(event)
}

async function GetMachineList() {
  const param: AxiosBody = {
    limit: 10,
    offset: 0,
  }
  const res: ListModel<MachineType> = await MachineListAsync(param)
  if (res) {
    machineStore.machineList = res
  }
}

async function GetVendorList() {
  const param: AxiosBody = {
    limit: 1000,
    offset: 0
  }
  const res: ListModel<VendorType> = await VendorListAsync(param)
  if (res) {
    vendorOptions.value = res.data.map(item => {
      return {
        label: item.name,
        value: item.id
      }
    })
  }
}

function ApplyFilter() {
  console.log(filter.value)
}
</script>
