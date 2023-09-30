<template>
  <ViewContainer :class="`bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop`">
    <main
      class="flex-grow flex flex-col lg:justify-center pt-6 pb-12 md:pt-10 md:pb-12 lg:pt-[76px] lg:pb-28 w-[87%] xl:w-[77%] mx-auto">
      <div
        class="step flex gap-4 md:gap-5 lg:gap-7 items-center justify-center md:justify-start mb-8 md:mb-14 animate-fade-in">
        <span class="step-num">01</span>
        <span class="step-text">{{ step[$route.name] }}</span>
      </div>
      <div
        class="content flex flex-col flex-grow lg:flex-grow-0 lg:flex-row gap-7 md:gap-12 lg:gap-20 md:justify-between items-center lg:items-end cursor-grab active:cursor-grabbing select-none" ref="content">
        <div
          class="content-left destination-image md:flex-grow md:w-full flex flex-col items-center animate-fade-in-slow" :key="idx">
          <img class="w-[170px] md:w-[300px] lg:w-[445px] animate-rotate-loop" draggable="false"
            :src="images[idx]" :alt="destinations[idx].name" />
        </div>
        <div class="content-right max-w-[573px] lg:max-w-[445px]">
          <div
            class="destination-nav flex justify-center lg:justify-start gap-6 md:gap-9 mb-5 md:mb-6 lg:mb-9 animate-fade-in-slow">
            <button v-for="d, i in destinations" :key="i"
              class="destination-nav-text pb-2 border-white border-b-[3px] border-opacity-0 hover:border-opacity-50 transition-all duration-300"
              :class="i == idx && 'border-opacity-100 text-white'" @click="updateIdx(i)">
              {{ d.name }}
            </button>
          </div>
          <div class="destination-info animate-fade-in-slow" :key="idx">
            <h2>{{ destinations[idx].name }}</h2>
            <p class="text-light-purple mb-8 md:mb-12 lg:mb-14">{{ destinations[idx].description }}</p>
            <hr class="border-[#383B4B]" />
            <div class="flex flex-col md:flex-row justify-center lg:justify-start gap-8 md:gap-20 mt-8 md:mt-7">
              <div>
                <p class="subheading-2">Avg. Distance</p>
                <p class="subheading-1">{{ destinations[idx].distance }}</p>
              </div>
              <div>
                <p class="subheading-2">Est. Travel Time</p>
                <p class="subheading-1">{{ destinations[idx].travel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </ViewContainer>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { step, destinations } from '../assets/data.json';
import ViewContainer from '../components/ViewContainer.vue';
import useSwipe from '../composables/swipe';
import { useAssets } from '../composables/assets';

const idx = ref(0);
function updateIdx(newIdx) {
  idx.value = newIdx;
}

const images = destinations.map((d) => useAssets(d.images.webp));

const content = ref(null);
onMounted(() => {
  const { onSwipeLeft, onSwipeRight } = useSwipe(content.value);
  onSwipeLeft(() => {
    if (idx.value >= destinations.length - 1) return;
    idx.value++;
  })
  onSwipeRight(() => {
    if (idx.value <= 0) return;
    idx.value--;
  })
})


</script>