<template>
  <n-config-provider :theme="settingStore.theme == THEME.DARK.toString() ? darkTheme : lightTheme">
    <div class="app">
      <div class="header">
        <Header />
      </div>
      <div class="body">
        <main>
          <RouterView />
        </main>
      </div>
      <div class="footer"></div>
    </div>
    <n-global-style />
  </n-config-provider>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import { darkTheme, lightTheme, NConfigProvider, NGlobalStyle } from 'naive-ui'
import { useSettingStore } from '@/stores/settingStore'
import { THEME } from './type/SettingEnum'

const settingStore = useSettingStore()
</script>

<style lang="css" src="./styles/main.css"></style>
<style lang="css" src="./styles/theme.css"></style>
