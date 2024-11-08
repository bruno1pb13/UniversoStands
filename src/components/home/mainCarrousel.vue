<script>
export default {
  data() {
    return {
      currentIndex: 0,
      depoiments: [
        {
          alt: "Jackson Viapiana",
          img: "https://img.freepik.com/fotos-gratis/por-do-sol-e-silhuetas-de-arvores-nas-montanhas-generative-ai_169016-29371.jpg",
        },
        {
          alt: "Jackson Viapiana",
          img: "https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg",
        },
        {
          alt: "Jackson Viapiana",
          img: "https://static3.depositphotos.com/1003352/159/i/450/depositphotos_1592977-stock-photo-tropical-beach.jpg",
        },
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
