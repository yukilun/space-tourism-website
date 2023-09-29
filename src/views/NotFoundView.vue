<template>
  <ViewContainer :class="`bg-home-mobile md:bg-home-tablet lg:bg-home-desktop`">
    <div class="flex-grow flex flex-col justify-center items-center text-center">
        <h1 class="tracking-widest">404</h1>
        <h4 class="heading-4 mb-2">It looks like you're lost...</h4>
        <p class="text-light-purple">The page you are looking for no longer exists.</p>
    </div>

  </ViewContainer>
</template>

<script setup>
import ViewContainer from '../components/ViewContainer.vue';
</script>