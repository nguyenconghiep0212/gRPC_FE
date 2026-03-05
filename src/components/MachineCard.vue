<template>
  <div>
    <n-data-table :bordered="false" :single-line="false" :columns="columns" :data="data" />
    <div class="flex justify-end mt-4">
      <n-pagination v-model:page="page" :page-count="pageCount" show-size-picker :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize" @update:page-size="($event) => {
          onPageSizeChange($event)
          $emit('emitPageSizeChange', $event)
        }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MachineType } from '@/type/MachineType'
import { computed, h, ref } from 'vue'
import type { DataTableColumns, } from 'naive-ui';
import { NPagination, NDataTable, NButton } from 'naive-ui'
import type { ListModel } from '@/type/ListType';


const props = defineProps<{
  machines: ListModel<MachineType>
}>()
const page = ref(1)
const pageSize = ref(20);
const pageCount = ref(props.machines.total / pageSize.value)


function onPageSizeChange(event: number) {
  pageSize.value = event
}

const data = computed(() => props.machines?.data)
const columns = CreateColumn({
  checkMachineHealth(rowData) {
    console.log(rowData.id)
  }
})

function CreateColumn({ checkMachineHealth }: { checkMachineHealth: (rowData: MachineType) => void }): DataTableColumns<MachineType> {
  const columns: DataTableColumns<MachineType> = [
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
      key: 'vendor'
    },
    {
      title: 'Owner',
      key: 'lineOwner'
    },
    {
      title: 'Test Suite',
      key: 'testSuite'
    },

    {
      title: 'Project',
      key: 'project'
    },
    {
      title: 'Site',
      key: 'site'
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
          h('i', { class: 'mdi mdi-plus-circle text-green-400', onClick: () => checkMachineHealth(row) })
        ])
      },

    },
  ]
  return columns
}

</script>

<style></style>
