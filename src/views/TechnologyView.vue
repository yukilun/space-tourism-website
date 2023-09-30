<template>
  <ViewContainer :class="`bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop`">
    <main class="flex-grow flex flex-col lg:justify-center pt-6 pb-12 md:pt-10 md:pb-24 lg:pt-[76px] lg:pb-24 lg:pl-[10%] xl:pl-40 2xl:w-[77%] 2xl:mx-auto 2xl:pl-0">
        <div class="step flex gap-4 md:gap-5 lg:gap-7 items-center justify-center md:justify-start animate-fade-in pb-4 md:pb-9 md:pl-[7.5%] lg:pb-3 lg:pl-0">
            <span class="step-num">03</span>
            <span class="step-text">{{ step[$route.name] }}</span>
        </div>
      <div class="content flex flex-col flex-grow lg:flex-grow-0 lg:flex-row md:justify-between items-center gap-8 md:gap-14 lg:gap-20 cursor-grab active:cursor-grabbing select-none" ref="content">
        <div class="content-left flex flex-col lg:flex-row items-center gap-6 md:gap-11 lg:gap-20 w-[87%] md:w-auto">
          <div class="technology-nav flex lg:flex-col gap-4 lg:gap-8 animate-fade-in-slow">
            <button v-for="t, i in technology" :key="i" 
              class="heading-4 w-[40px] md:w-[60px] lg:w-[70px] xl:w-[80px] aspect-square rounded-full border-[1px] border-white border-opacity-25 hover:border-opacity-100"
              :class="i == idx && 'bg-white text-dark-blue'" @click="updateIdx(i)">
              {{ i+1 }}
            </button>
          </div>
          <div class="technology-info md:max-w-[458px] lg:min-w-[340px] lg:max-w-[470px] animate-fade-in-slow" :key="idx">
            <p class="subheading-2">The terminology...</p>
            <h3 class="mb-2">{{ technology[idx].name }}</h3>
            <p class="text-light-purple">{{ technology[idx].description }}</p>
          </div>
        </div>
        <div class="content-right technology-image order-first lg:order-last w-full lg:w-auto md:flex-grow flex justify-center lg:justify-end animate-fade-in-slow" :key="idx">
          <img class="w-full object-contain lg:hidden" :src="images[idx][0]" :alt="technology[idx].name" />
          <img class="object-contain hidden lg:block" :src="images[idx][1]" :alt="technology[idx].name" />
        </div>
      </div>
    </main>
  </ViewContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { step, technology } from '../assets/data.json';
import ViewContainer from '../components/ViewContainer.vue';
import useSwipe from '../composables/swipe';
import { useAssets } from '../composables/assets';

const idx = ref(0);
function updateIdx(newIdx) {
  idx.value = newIdx;
}

const images = technology.map((t) => [useAssets(t.images.landscape), useAssets(t.images.portrait)]);

const content = ref(null);
onMounted(() => {
  const { isTouchScreen, onSwipeUp, onSwipeDown, onSwipeLeft, onSwipeRight } = useSwipe(content.value);
  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
  onSwipeUp(() => {
    if(!isTouchScreen.value && isLargeScreen) {
      if (idx.value >= technology.length - 1) return;
      idx.value++;
    } 
  })
  onSwipeDown(() => {
    if(!isTouchScreen.value && isLargeScreen) {
      if (idx.value <= 0) return;
      idx.value--;
    } 
  })
  onSwipeLeft(() => {
    if(isTouchScreen.value && !isLargeScreen) {
      if (idx.value >= technology.length - 1) return;
      idx.value++;
    }
  })
  onSwipeRight(() => {
    if(isTouchScreen.value && !isLargeScreen) {
      if (idx.value <= 0) return;
      idx.value--;
    }
  })
})

</script>