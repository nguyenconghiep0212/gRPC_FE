<template>
    <n-card class="opacity-85 hover:opacity-100 hover:shadow-sm hover:shadow-gray-600 hover:cursor-pointer">
        <div class="grid grid-cols-3 gap-2">
            <div class="flex space-x-2 col-span-2 items-center">
                <div class="card_title pb-1!">
                    {{ projectLocal.name }}
                </div>
                <n-tag type="info" size="small">
                    {{ projectLocal.site }}
                </n-tag>
                <n-tag type="info" size="small">
                    {{ projectLocal.customer }}
                </n-tag>
            </div>
            <div class="flex justify-end">
                <n-avatar class="-mr-2" round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <n-avatar class="-mr-2" round size="small"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <n-avatar class="-mr-2" round size="small"
                    src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                <n-avatar round size="small">
                    +8
                </n-avatar>
            </div>
        </div>
        <div>
            {{ projectLocal.details }}
        </div>
    </n-card>
</template>


<script setup lang="ts">
import { NCard, NTag, NAvatar } from 'naive-ui';
import type { ProjectType } from '@/type';
import { computed } from 'vue';
const props = defineProps<{
    project: ProjectType
}>()

const projectLocal = computed(() => props.project)
</script>