<template>
    <div class="vertical-nav fixed top-0 -right-1 h-screen z-10 bg-white bg-opacity-5 backdrop-blur-2xl transition-all duration-300" :class="isOpenMenu ? '!right-0 w-[254px] md:w-0': 'w-1 md:w-0'">
       <button type="button" class="w-full pt-8 pb-16 px-6 flex justify-end transition-all duration-300" :class="!isOpenMenu && 'scale-0'" aria-label="close-navbar">
            <IconClose @click="toggleMenu"/>
       </button>
       <NavContent />
    </div>
</template>

<script setup>
import NavContent from './NavContent.vue';
import IconClose from './icons/IconClose.vue';
const { isOpenMenu, toggleMenu } = defineProps(['isOpenMenu', 'toggleMenu']);
</script>