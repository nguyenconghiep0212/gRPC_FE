<template>
    <div>
        <div class="header">
            <Header />
        </div>
        <div class="body">
            <main class="h-full w-full">
                <RouterView />
            </main>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script setup lang="ts">
import Header from './Header.vue';
</script>