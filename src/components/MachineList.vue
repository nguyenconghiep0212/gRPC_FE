<template>
  <div>
    <span>Device List</span>
  </div>
</template>

<script setup lang="ts">
import { GetMachineListAsync } from '@/api/MachineList/index'
import { onMounted } from 'vue'
onMounted(() => {
  GetMachineList()
})
async function GetMachineList() {
  const res = await GetMachineListAsync()
  if (res) {
    console.log(res)
  }
}
</script>
