<template>
    <div>
        <div class="card_title">Filter</div>
        <div class="space-y-2">
            <div class="grid grid-cols-3 gap-2">
                <n-input v-model:value="filter.name" type="text" placeholder="Name..." />
                <n-input v-model:value="filter.alias" type="text" placeholder="Alias..." />
                <n-select v-model:value="filter.isOnline" filterable placeholder="Status..." :options="statusOptions"
                    clearable />
            </div>
            <div class="grid grid-cols-3 gap-2">
                <n-select v-model:value="filter.vendor" multiple filterable placeholder="Vendors..."
                    :options="vendorOptions" clearable />
                <n-select v-model:value="filter.project" multiple filterable placeholder="Project..."
                    :options="vendorOptions" clearable />
                <n-select v-model:value="filter.site" multiple filterable placeholder="Site..." :options="vendorOptions"
                    clearable />
            </div>
        </div>
        <div class="flex justify-end mt-4">
            <n-button type="primary" @click="ApplyFilter">
                Apply
            </n-button>
        </div>
    </div>

</template>


<script setup lang="ts">
import { computed, ref } from 'vue'
import { NInput, NButton, NSelect } from 'naive-ui'
import type { VendorType, ListModel } from '@/type'
import { FilterMapping } from '@/helpers';
import { useMachineStore } from '@/stores/machineStore'

const emits = defineEmits(['emitApplyFilter'])
const props = defineProps<{
    vendorList: ListModel<VendorType>
}>()

const machineStore = useMachineStore()
const filter = ref({
    name: null,
    alias: null,
    vendor: [],
    project: [],
    site: [],
    isOnline: null,
})
const vendorOptions = computed<{ label: string, value: number }[]>(() => {
    return props.vendorList.data.map((item) => { return { label: item.name, value: item.id } })
})
const statusOptions = [
    {
        label: "Online",
        value: 1
    },
    {
        label: "Offline",
        value: 0
    },
]

function ApplyFilter() {
    const send: any = FilterMapping(filter.value);
    machineStore.filter = send;
    emits('emitApplyFilter', send)
}
</script>