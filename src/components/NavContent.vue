<template>
    <nav aria-label="nav-menu">
        <ul class="flex flex-col gap-4 md:flex-row md:gap-9 lg:gap-12">
            <li v-for="nav, idx in navigation" :key="idx"
                class="pl-8 py-2 border-white border-r-4 md:pl-0 md:py-10 md:border-r-0 md:border-b-[3px] 
                        transition-all duration-300 border-opacity-0 pointer-events-none hover:border-opacity-50"
                :class="$route.path == nav.path && '!border-opacity-100'">
                <RouterLink :to='nav.path' class="flex gap-3 pointer-events-auto">
                    <span class="nav-num md:hidden lg:inline">{{ String(idx+1).padStart(2, '0') }}</span>
                    <span class="nav-text">{{ nav.name }}</span>
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { navigation } from '../assets/data.json';
</script>