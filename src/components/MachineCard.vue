<template>
  <div>
    <div class="mb-2 flex justify-end">
      <n-button :disabled="selectedMachines.length == 0" type="primary" size="small">
        <span class="mr-1">
          Run Health Check
        </span>
        <span v-if="selectedMachines.length">
          ({{ selectedMachines.length }})
        </span>
      </n-button>
    </div>
    <n-data-table :bordered="false" :single-line="false" :columns="columns" :data="data" />
    <div class="flex justify-end mt-4 ">
      <n-pagination v-model:page="page" :page-count="pageCount" show-size-picker :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize" @update:page-size="OnPageSizeChange" @update:page="OnPageChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MachineType } from '@/type/MachineType'
import { computed, h, ref } from 'vue'
import { NTag, type DataTableColumns } from 'naive-ui';
import { NPagination, NDataTable, NButton, NCheckbox } from 'naive-ui'
import type { ListModel } from '@/type/ListType';
import { useMachineStore } from '@/stores/machineStore'

const emits = defineEmits(['emitPageSizeChange', 'emitPageChange', 'emitSelectMachine'])
const props = defineProps<{
  machines: ListModel<MachineType>
}>()
const machineStore = useMachineStore()
const page = ref(machineStore.page)
const pageSize = ref(machineStore.pageSize);
const pageCount = computed(() => Math.ceil(props.machines.total / pageSize.value))


function OnPageSizeChange(event: number) {
  pageSize.value = event
  machineStore.pageSize = event
  emits('emitPageSizeChange', event)
}

function OnPageChange(event: number) {
  machineStore.page = event
  emits('emitPageChange', event)
}

const data = computed(() => props.machines?.data)
const columns = CreateColumn({
  checkMachineHealth(rowData) {
    console.log(rowData.id)
  }
})
const selectedMachines = ref<MachineType[]>([])

function CreateColumn({ checkMachineHealth }: { checkMachineHealth: (rowData: MachineType) => void }): DataTableColumns<MachineType> {
  const columns: DataTableColumns<MachineType> = [
    {
      title: '#',
      key: '#',
      render(row) {
        return h(NCheckbox, { checked: !!selectedMachines.value.find((item) => item.id == row.id), onUpdateChecked: (event) => onMachineCheckbox(event, row) },)
      },
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Alias',
      key: 'alias'
    },
    {
      title: 'Vendor',
      key: 'vendor',
      render(row) {
        return h(NTag, { bordered: true, type: "info" }, row.vendor)
      }
    },
    {
      title: 'Owner',
      key: 'lineOwner'
    },
    {
      title: 'Project',
      key: 'project'
    },
    {
      title: 'Site',
      key: 'site',
      render(row) {
        return h(NTag, { bordered: true, type: "info" }, row.site)
      }
    },
    {
      title: 'Health',
      key: 'health'
    },
    {
      title: 'Last Check',
      key: 'lastHealthCheck'
    },
    {
      title: 'Online',
      key: 'isOnline'
    },
    {
      title: 'Last Online',
      key: 'lastOnline'
    },
    {
      title: 'Action',
      key: '#',
      render(row) {
        return h(NButton, { text: true }, [
          h(NButton, { type: 'primary', size: "small", onClick: () => checkMachineHealth(row) }, [
            h('span', { class: 'text-xs' }, 'Health Check')
          ])
        ])
      },

    },
  ]
  return columns
}
function onMachineCheckbox(checkEvent: boolean, data: MachineType) {
  if (checkEvent) {
    selectedMachines.value.push(data)
  } else {
    const index = selectedMachines.value.findIndex((item) => item.id == data.id)
    selectedMachines.value.splice(index, 1)
  }
}
</script>

<style></style>
