<template>
  <div class="app">
    <div class="header">
      <div class="grid grid-cols-2">
        <div class="col-span-1">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuList" responsive />
        </div>
        <div class="cols-span-1 flex justify-end items-center">
          <n-avatar
            round
            size="small"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
      </div>
    </div>
    <div class="body">
      <main>
        <RouterView />
      </main>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { NMenu, NAvatar } from 'naive-ui'
import { computed, h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routerArray } from './router/index'

const menuList = computed<MenuOption[]>(() => {
  return routerArray.map((item) => {
    return {
      label: () => h(RouterLink, { to: item.path }, item.name),
      key: item.key,
    }
  })
})
const activeKey = ref('dashboard')
</script>

<style lang="css" src="./styles/main.css"></style>
