<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="grid grid-cols-4">
      <div class="col-span-3">
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuList" responsive />
      </div>
      <div class="cols-span-1 flex justify-end items-center gap-6">
        <n-button tertiary text @click="OnToggleLanguage">
          <template #icon>
            <n-icon>
              <i class="mdi mdi-translate"></i>
            </n-icon>
          </template>
        </n-button>
        <n-button tertiary text @click="OnToggleTheme">
          <template #icon>
            <i class="mdi mdi-brightness-6"></i>
          </template>
        </n-button>
        <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
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
import { getActiveMenu, setActiveMenu } from '@/helpers/settingStorage'
const settingStore = useSettingStore()
const menuList = computed<MenuOption[]>(() => {
  const temp: MenuOption[] = []
  routerArray[1]?.children?.forEach((item) => {
    temp.push({
      label: () => h(RouterLink, {
        to: item.path, onClick: () => {
          setActiveMenu(item.key)
        }
      }, item.name),
      key: item.key,
    })
  })
  return temp
})
const activeKey = ref(getActiveMenu() || 'dashboard')

function OnToggleTheme() {
  settingStore.toggleTheme()
}
function OnToggleLanguage() {
  settingStore.toggleLanguage()
}
</script>
