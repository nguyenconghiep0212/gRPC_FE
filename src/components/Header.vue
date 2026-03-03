<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="grid grid-cols-4">
      <div class="col-span-3">
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuList" responsive />
      </div>
      <div class="cols-span-1 flex justify-end items-center space-x-3">
        <n-button tertiary round @click="OnToggleLanguage">
          <template #icon>
            <n-icon>
              <i class="mdi mdi-translate text-red-500"></i>
            </n-icon>
          </template>
        </n-button>
        <n-button tertiary round @click="OnToggleTheme">
          <template #icon>
            <i class="mdi mdi-brightness-6 text-red-500"></i>
          </template>
        </n-button>
        <n-avatar
          round
          size="small"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NMenu, NAvatar, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { computed, h, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { routerArray } from '@/router/index'
import { useSettingStore } from '@/stores/settingStore'
const settingStore = useSettingStore()
const menuList = computed<MenuOption[]>(() => {
  return routerArray.map((item) => {
    return {
      label: () => h(RouterLink, { to: item.path }, item.name),
      key: item.key,
    }
  })
})
const activeKey = ref('dashboard')

function OnToggleTheme() {
  settingStore.toggleTheme()
}
function OnToggleLanguage() {
  settingStore.toggleLanguage()
}
</script>
