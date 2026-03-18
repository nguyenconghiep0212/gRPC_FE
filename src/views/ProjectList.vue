<template>
  <n-card>
    <span class="card_title">Project List</span>
    <div class="grid grid-cols-3 gap-4 mt-4 ">
      <div v-for="(item, index) in projectList" :key="index">
        <ProjectCard :project="item" />
      </div>
    </div>
  </n-card>
</template>

<script setup lang="ts">
import { projectListAsync } from '@/api/project'
import type { ProjectType } from '@/type'
import { onMounted, ref } from 'vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { NCard } from 'naive-ui'

onMounted(async () => {
  await GetProjectListAsync()
})

const projectList = ref<ProjectType[]>([])

async function GetProjectListAsync(params = { limit: 10, offset: 0 }) {
  const res = await projectListAsync(params)
  if (res) {
    projectList.value = res.data
    console.log(projectList.value)
  }
}
</script>
