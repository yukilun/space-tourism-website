<template>
  <ViewContainer :class="`bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop`">
    <main class="flex-grow flex flex-col lg:justify-center pt-6 pb-12 md:pt-10 md:pb-0 lg:pt-[76px] w-[87%] xl:w-[77%] mx-auto">
      <div class="step flex gap-4 md:gap-5 lg:gap-7 items-center justify-center md:justify-start animate-fade-in pb-8 md:pb-14 lg:pb-0">
        <span class="step-num">02</span>
        <span class="step-text">{{ step[$route.name] }}</span>
      </div>
      <div
        class="content flex flex-col flex-grow lg:flex-row gap-8 md:gap-10 md:justify-between items-center lg:items-stretch xl:-mt-20 cursor-grab active:cursor-grabbing select-none" ref="content">
        <div class="content-left min-h-full flex flex-col justify-end lg:pt-20 lg:mb-24">
          <div class="crew-info mb-10 lg:mb-32 animate-fade-in-slow" :key="idx">
            <h4 class="opacity-50">{{ crew[idx].role }}</h4>
            <h3 class="mb-4">{{ crew[idx].name }}</h3>
            <p class="text-light-purple md:max-w-[458px] lg:max-w-[444px] ">{{ crew[idx].bio }}</p>
          </div>
          <div class="crew-nav order-first md:order-last flex justify-center lg:justify-start gap-6 mb-8 md:mb-0 animate-fade-in-slow">
            <button v-for="c, i in crew" :key="i"
              class="w-[10px] lg:w-[15px] aspect-square rounded-full bg-white opacity-[18%] hover:opacity-50"
              :class="i == idx && '!opacity-100'" @click="updateIdx(i)">
            </button>
          </div>
        </div>
        
        <div
          class="content-right crew-image order-first md:order-last h-[223px] md:h-auto md:w-[458px] lg:h-auto w-full lg:w-0 md:flex-grow flex flex-col md:justify-end lg:items-end 
                border-b-[1px] border-[#383B4B] md:border-b-0 animate-fade-in-slow"
          :key="idx">
          <img class="max-h-full object-contain" :src="images[idx]" :alt="crew[idx].name" draggable="false"/>
        </div>
      </div>
    </main>
  </ViewContainer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { step, crew } from '../assets/data.json';
import ViewContainer from '../components/ViewContainer.vue';
import useSwipe from '../composables/swipe';
import { useAssets } from '../composables/assets';

const idx = ref(0);
function updateIdx(newIdx) {
  idx.value = newIdx;
}

const images = crew.map((c) => useAssets(c.images.webp));

const content = ref(null);
onMounted(() => {
  const { onSwipeLeft, onSwipeRight } = useSwipe(content.value);
  onSwipeLeft(() => {
    if (idx.value >= crew.length - 1) return;
    idx.value++;
  })
  onSwipeRight(() => {
    if (idx.value <= 0) return;
    idx.value--;
  })
})


</script>