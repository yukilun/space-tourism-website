<template>
    <header class="mx-6 md:ml-10 md:mr-0 lg:pt-10 lg:ml-14 lg:mr-0 flex justify-between items-center">
        <div class="logo py-6">
            <IconLogo />
        </div>
        <button type="button" class="menu-open-btn py-6 md:hidden transition-all duration-300" :class="isOpenMenu && 'scale-0'" @click="toggleMenu" aria-label="open-navbar">
            <IconHamburger />
        </button>
        <div class="decoration-line bg-white bg-opacity-25 h-[1px] flex-grow ml-16 -mr-8 z-10 hidden lg:block">

        </div>
        <div class="nav-container bg-white bg-opacity-5 backdrop-blur-2xl z-0 hidden md:block md:px-12 lg:pl-24 lg:pr-40">
            <NavContent/>
        </div>
    </header>
    <NavSidebar :isOpenMenu="isOpenMenu" :toggleMenu="toggleMenu"/>
</template>

<script setup>
import { ref } from 'vue';
import IconLogo from './icons/IconLogo.vue';
import IconHamburger from './icons/IconHamburger.vue';
import NavSidebar from './NavSidebar.vue';
import NavContent from './NavContent.vue';

const isOpenMenu = ref(false);
function toggleMenu() {
    isOpenMenu.value = !isOpenMenu.value;
}

</script>