import { LANGUAGE, THEME } from '@/type/SettingEnum'

const STORAGE_KEYS = {
  theme: 'app.theme',
  language: 'app.language',
  activeMenu: 'router.active_router'
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.theme) || THEME.LIGHT.toString()
}

export function setTheme(theme: string) {
  localStorage.setItem(STORAGE_KEYS.theme, theme)
}

export function getLanguage() {
  return localStorage.getItem(STORAGE_KEYS.language) || LANGUAGE.EN.toString()
}

export function setLanguage(lang: string) {
  localStorage.setItem(STORAGE_KEYS.language, lang)
}

export function getActiveMenu() {
  return localStorage.getItem(STORAGE_KEYS.activeMenu)
}

export function setActiveMenu(activeMenu: string) {
  localStorage.setItem(STORAGE_KEYS.activeMenu, activeMenu)
}