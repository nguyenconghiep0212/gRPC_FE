<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div>
    <n-data-table :bordered="false" :single-line="false" :columns="props.columns" :data="props.data"
      :pagination="props.pagination" />
  </div>
</template>

<script setup lang="ts">
import { NDataTable } from 'naive-ui'
import type { PaginationProps, DataTableRowData, DataTableColumns } from 'naive-ui';

const props = defineProps<{
  columns?: DataTableColumns
  data?: DataTableRowData[]
  pagination?: PaginationProps
}>()

</script>
