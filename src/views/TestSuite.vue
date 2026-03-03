<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <span>Test Suite</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { TestSuiteListAsync } from '@/api/TestSuite'
import { useMachineStore } from '@/stores/machineStore'
import type { AxiosBody } from '@/type/Axios'

onMounted(() => {
  TestSuiteList()
})

const machineStore = useMachineStore()
async function TestSuiteList() {
  const param: AxiosBody = {
    limit: 10,
    offset: 0,
  }
  const res = await TestSuiteListAsync(param)
  if (res) {
    machineStore.machineList = res
  }
}
</script>
