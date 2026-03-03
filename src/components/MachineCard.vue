<template>
  <div class="bg-gray-400 px-2 py-1 rounded-xs">
    <span>{{ props.machine?.name }}</span>
    <span>{{ props.machine?.alias }}</span>
  </div>
</template>

<script setup lang="ts">
import type { MachineType } from '@/type/MachineType'
import { onMounted } from 'vue'

const props = defineProps<{
  machine?: MachineType
}>()

onMounted(() => {
  console.log(props.machine)
})
</script>

<style></style>
