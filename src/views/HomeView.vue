<template>
  <ViewContainer :class="`bg-home-mobile md:bg-home-tablet lg:bg-home-desktop`">
    <main class="flex-grow flex flex-col lg:justify-center py-12 md:py-24 lg:pt-48 w-[87%] max-w-[1110px] mx-auto animate-fade-in">
      <div class="content flex flex-col flex-grow lg:flex-grow-0 lg:flex-row gap-20 md:justify-between items-center lg:items-end">
        <div class="intro max-w-[327px] md:max-w-[450px]">
          <h5>{{ home.subheading }}</h5>
          <h1>{{ home.heading }}</h1>
          <p class="text-light-purple">{{ home.description }}</p>
        </div>
        <RouterLink to="/destination"
          class="explore-btn flex-shrink-0 rounded-full bg-white flex justify-center items-center 
                    aspect-square w-[150px] md:w-[242px] lg:w-[274px] relative z-0
                    before:absolute before:-z-10 before:block before:w-full before:aspect-square 
                    before:rounded-full before:bg-white before:bg-opacity-10 before:transition-all before:duration-300 hover:before:scale-150">
          <span class="text-[20px] md:text-[32px] tracking-[1.25px] md:tracking-[2px] font-serif uppercase text-dark-blue">Explore</span>
        </RouterLink>
      </div>
    </main>
  </ViewContainer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { home } from '../assets/data.json';
import ViewContainer from '../components/ViewContainer.vue';
</script>