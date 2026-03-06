<template>
  <div>
    <div class="space-y-2">
      <n-card>
        <MachineFilter :vendorList="vendorOptions" @emitApplyFilter="ApplyFilter" />
      </n-card>
      <n-card>
        <div class="card_title">Machine List</div>
        <MachineCard :machines="machineStore.machineList" @emitPageSizeChange="OnPageSizeChange"
          @emitPageChange="OnPageChange" />
      </n-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, } from 'vue'
import { MachineListAsync } from '@/api/Machine/index'
import { useMachineStore } from '@/stores/machineStore'
import MachineCard from '@/components/MachineCard.vue'
import MachineFilter from '@/components/MachineFilter.vue'
import type { AxiosBody } from '@/type/Axios'
import { NCard } from 'naive-ui'
import type { ListModel } from '@/type/ListType'
import type { MachineType } from '@/type/MachineType'
import type { VendorType } from '@/type/vendorType'
import { VendorListAsync } from '@/api/vendor'

onMounted(async () => {
  await GetMachineList()
  await GetVendorList()
})

const machineStore = useMachineStore()
const vendorOptions = ref<ListModel<VendorType>>({ data: [], total: 0 })

async function OnPageSizeChange() {
  const params: AxiosBody = {
    limit: machineStore.pageSize,
    offset: (machineStore.page - 1) * machineStore.pageSize,
    filters: machineStore.filter
  }
  await GetMachineList(params)
}
async function OnPageChange() {
  const params: AxiosBody = {
    limit: machineStore.pageSize,
    offset: (machineStore.page - 1) * machineStore.pageSize,
    filters: machineStore.filter
  }
  await GetMachineList(params)
}

async function GetMachineList(param: AxiosBody = {
  limit: 20,
  offset: 0,
}) {
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
    vendorOptions.value.data = res.data.map(item => item)
  }
}

async function ApplyFilter(filter: object) {
  machineStore.page = 1
  const params: AxiosBody = {
    limit: machineStore.pageSize,
    offset: (machineStore.page - 1) * machineStore.pageSize,
    filters: filter
  }
  await GetMachineList(params)
}

</script>
