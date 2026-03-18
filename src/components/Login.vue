<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-full flex flex-col">
        <div class="flex justify-end mt-4 mr-4">
            <div class="flex justify-end items-center gap-6">
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
        <div class="flex-col flex-1 flex justify-center items-center">
            <n-form ref="formRef" :label-width="80" :model="form" :rules="rules" class="w-1/4">
                <n-form-item label="Username" path="form.username">
                    <n-input v-model:value="form.username" placeholder="Username..." />
                </n-form-item>
                <n-form-item label="Password" path="form.password">
                    <n-input v-model:value="form.password" type="password" placeholder="Password..."
                        show-password-on="mousedown" />
                </n-form-item>
            </n-form>
            <div class="flex justify-center">
                <n-button @click="HandleLogin">
                    Login
                </n-button>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { NInput, NForm, NFormItem, NButton, NIcon } from 'naive-ui'
import { ref } from 'vue'
import { useSettingStore } from '@/stores/settingStore'
const settingStore = useSettingStore()

const form = ref({ username: "", password: "" })
const rules = {
    username: {
        required: true,
        message: 'Please input your username',
        trigger: ['input']
    },
    password: {
        required: true,
        message: 'Please input your password',
        trigger: ['input']
    }
}

function HandleLogin() {

}
function OnToggleTheme() {
    settingStore.toggleTheme()
}
function OnToggleLanguage() {
    settingStore.toggleLanguage()
}
</script>