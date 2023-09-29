<template>
    <div class="min-h-screen bg-center bg-cover flex flex-col">
        <Header />
        <slot></slot>
    </div>
</template>

<script setup>
import Header from './Header.vue';
</script>