<template>
  <n-config-provider :theme="theme">
    <div class="app">
      <RouterView />
    </div>
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useSettingStore } from '@/stores/settingStore'
import { THEME } from './type/SettingEnum'
import { computed } from 'vue'

const settingStore = useSettingStore()

const theme = computed(() => {
  document.body.setAttribute(
    'data-theme',
    settingStore.theme == THEME.DARK.toString() ? 'dark' : 'light',
  )
  return settingStore.theme == THEME.DARK.toString() ? darkTheme : lightTheme
}
)

</script>

<style lang="css" src="./styles/main.css"></style>
<style lang="css" src="./styles/theme.css"></style>
