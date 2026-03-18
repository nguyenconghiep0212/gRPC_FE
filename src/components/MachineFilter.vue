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
                    :options="projectOptions" clearable :reset-menu-on-options-change="false" @scroll="HandleScroll"
                    @search="HandleSearch" />
                <n-select v-model:value="filter.site" multiple filterable placeholder="Site..." :options="siteOptions"
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
import { computed, onMounted, ref } from 'vue'
import { NInput, NButton, NSelect } from 'naive-ui'
import type { VendorType, ListModel, ProjectType, SiteType, AxiosBody } from '@/type'
import { FilterMapping } from '@/helpers';
import { useMachineStore } from '@/stores/machineStore'
import { projectListAsync } from '@/api/project';
import { SiteListAsync } from '@/api/site';
import { VendorListAsync } from '@/api/vendor';

const emits = defineEmits(['emitApplyFilter'])


onMounted(async () => {
    await GetVendorList()
    await GetProjectList()
    await GetSiteList()
})

const machineStore = useMachineStore()
const filter = ref({
    name: null,
    alias: null,
    vendor: [],
    project: [],
    site: [],
    isOnline: null,
})

const projectLimit = 10
let projectOffset = 0
const projectParams: AxiosBody = {
    limit: projectLimit,
    offset: projectOffset,
}
const vendorList = ref<ListModel<VendorType>>({ data: [], total: 0 })
const projectList = ref<ListModel<ProjectType>>({ data: [], total: 0 })
const siteList = ref<SiteType[]>([])
const vendorOptions = computed<{ label: string, value: number }[]>(() => {
    return vendorList.value.data.map((item) => { return { label: item.name, value: item.id } })
})
const projectOptions = computed<{ label: string, value: number }[]>(() => {
    return projectList.value.data.map((item) => { return { label: item.name, value: item.id } })
})
const siteOptions = computed<{ label: string, value: number }[]>(() => {
    return siteList.value.map((item) => { return { label: item.name, value: item.id } })
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


async function GetVendorList() {
    const param: AxiosBody = {
        limit: 1000,
        offset: 0
    }
    const res: ListModel<VendorType> = await VendorListAsync(param)
    if (res) {
        vendorList.value.data = res.data.map(item => item)
    }
}

async function GetProjectList(param: AxiosBody = {
    limit: 10,
    offset: 0
}) {
    const res: ListModel<ProjectType> = await projectListAsync(param)
    if (res) {
        const newData: ProjectType[] = []
        res.data.forEach((item: ProjectType) => {
            const index = projectList.value.data.findIndex(e => e.id == item.id)
            if (index == -1) {
                newData.push(item)
            }
        })
        projectList.value.total = res.total
        projectList.value.data = projectList.value.data.concat(newData)
    }
}


async function GetSiteList() {
    const param: AxiosBody = {
        limit: 1000,
        offset: 0
    }
    const res: SiteType[] = await SiteListAsync(param)
    if (res) {
        siteList.value = res
    }
}


function ApplyFilter() {
    const send: any = FilterMapping(filter.value);
    machineStore.filter = send;
    emits('emitApplyFilter', send)
}

let timeoutId = 0
function HandleSearch(event: string) {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(async () => {
        const params = {
            filters: {
                name: [event]
            }
        }
        await GetProjectList(params)
    }, 3000);
}
async function HandleScroll(e: Event) {
    const currentTarget = e.currentTarget as HTMLElement
    if (
        Math.ceil(currentTarget.scrollTop + currentTarget.offsetHeight)
        >= currentTarget.scrollHeight
    ) {
        if (projectList.value.data.length < projectList.value.total) {
            projectOffset++;
            projectParams.offset = projectOffset * projectLimit
            await GetProjectList(projectParams)
        }
    }
}
</script>