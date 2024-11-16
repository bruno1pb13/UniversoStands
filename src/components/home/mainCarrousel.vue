<script>
export default {
  data() {
    return {
      currentIndex: 0,
      depoiments: [
        {
          img: "/assets/stands/cenografico/porcelanaMonteSiao02.webp",
        },
        {
          img: "/assets/stands/cenografico/graniAmici.webp"        },
        {
          img: "/assets/stands/cenografico/origetec02.webp"        },
      ],
    };
  },
  computed: {
    currentTestimonial() {
      return this.depoiments[this.currentIndex];
    },
  },
  methods: {
    nextTestimonial() {
      this.currentIndex = (this.currentIndex + 1) % this.depoiments.length;
    },
    prevTestimonial() {
      this.currentIndex =
        (this.currentIndex - 1 + this.depoiments.length) %
        this.depoiments.length;
    },
  },
};
</script>

<template>
  <div class="flex bg-[#663399] relative overflow-hidden max-w-[100vw] h-full">
    <div
      @click="prevTestimonial"
      class="hidden sm:block absolute left-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
    >
      <img src="/assets/icons/arrow_circle.png" alt="Previous" />
    </div>
    <div
      @click="nextTestimonial"
      class="hidden sm:block absolute right-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
    >
      <img src="/assets/icons/arrow_circle.png" alt="Next" class="rotate-180" />
    </div>

    <div class="flex items-center justify-center bg-[red] w-full h-[100%]">
      <transition name="fade" mode="out-in">
        <img
          :src="currentTestimonial.img"
          alt=""
          class="w-full h-full object-cover rounded overflow-hidden flex items-center justify-center"
        />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
