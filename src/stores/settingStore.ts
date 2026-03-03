import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LANGUAGE, THEME } from '@/type/SettingEnum'
import { getLanguage, getTheme, setLanguage, setTheme } from '@/helpers/settingStorage'

export const useSettingStore = defineStore('setting', () => {
  const theme = ref<string>(getTheme())
  const language = ref(getLanguage())

  function toggleTheme() {
    if (theme.value == THEME.DARK.toString()) {
      theme.value = THEME.LIGHT.toString()
    } else {
      theme.value = THEME.DARK.toString()
    }
    setTheme(theme.value)
    document.body.setAttribute(
      'data-theme',
      theme.value == THEME.DARK.toString() ? 'dark' : 'light',
    )
  }
  function toggleLanguage() {
    if (language.value == LANGUAGE.EN.toString()) {
      language.value = LANGUAGE.VI.toString()
      setLanguage(language.value)
    }
    if (language.value == LANGUAGE.VI.toString()) {
      language.value = LANGUAGE.EN.toString()
      setLanguage(language.value)
    }
  }
  return { theme, language, toggleTheme, toggleLanguage }
})
