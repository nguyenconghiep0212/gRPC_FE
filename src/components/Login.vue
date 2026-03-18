<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full h-full flex">
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
import { NInput, NForm, NFormItem, NButton } from 'naive-ui'
import { ref } from 'vue'

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

</script>