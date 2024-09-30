<script>
export default {
  data() {
    return {
      currentIndex: 0,
      depoiments: [
        {
          author: "Débora Stella",
          picture: "/assets/lorem/woman01.webp",
          enterprise: "Rock Innovations",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit dui ut tellus tempor commodo. Sed sodales pharetra semper. Curabitur cursus consequat gravida. Donec vel augue nec neque consectetur tincidunt. Proin ultricies neque non urna mollis, eget lacinia nisl varius. Nullam a nulla pulvinar, rutrum arcu vel, iaculis lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce lacinia varius odio. Vivamus ac commodo mi.",
          img: "https://static3.depositphotos.com/1003352/159/i/450/depositphotos_1592977-stock-photo-tropical-beach.jpg",
          standType: "gold",
          locale: "Feira xyz",
          date: "25/10/2023",
        },
        {
          author: "John Doe",
          picture: "/assets/lorem/man01.png",
          enterprise: "Tech Solutions",
          content:
            "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
          img: "/assets/lorem/OIG4.n5.jpeg",
          standType: "gold",
          locale: "Feira xyz",
          date: "25/10/2023",
        },
        {
          author: "Jane Smith",
          picture: "/assets/lorem/woman02.png",
          enterprise: "Creative Designs",
          content:
            "Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
          img: "/assets/lorem/OIG2.jpeg",
          standType: "gold",
          locale: "Feira xyz",
          date: "25/10/2023",
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
  <div
    class="grid grid-cols-5 grid-rows-5 bg-[#663399] p-[7vw] pt-[10em] gap-[7vw] relative"
  >
    <div
      @click="prevTestimonial"
      class="absolute left-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
    >
      <img src="/assets/icons/arrow_circle.png" alt="Previous" />
    </div>
    <div
      @click="nextTestimonial"
      class="absolute right-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
    >
      <img src="/assets/icons/arrow_circle.png" alt="Next" class="rotate-180" />
    </div>

    <transition name="fade" mode="out-in">
      <div
        :key="currentIndex"
        class="col-span-3 row-span-5 pt-[3em] text-white flex flex-col h-auto justify-between"
      >
        <div class="flex flex-col gap-12">
            <div class="flex gap-4">
              <div class="rounded overflow-hidden">
                <img
                  :src="currentTestimonial.picture"
                  alt="Author"
                  class="w-[5em] h-[5em] object-cover"
                />
              </div>
              <div class="flex flex-col justify-end leading-none">
                <span class="text-[28px]">{{ currentTestimonial.author }}</span>
                <span class="text-[16px]">{{ currentTestimonial.enterprise }}</span>
              </div>
            </div>
            <div>
                <span class="text-[20px] w-full min-h-[8em]">{{
                  currentTestimonial.content
                }}</span>
            </div>
            <div>
                <div class="grid grid-cols-2 grid-rows-1 gap-4">
                  <div class="flex gap-4 items-center">
                    <div class="w-[10] h-auto">
                      <img src="/assets/icons/GoldStar.svg" alt="" />
                    </div>
                    <span class="text-[#FFD700]">Stand Type</span>
                  </div>
                  <div class="flex gap-4 items-center">
                    <div>
                      <img src="/assets/icons/gps.png" alt="" />
                    </div>
                    <div class="flex flex-col leading-none">
                      <span class="text-[20px] font-bold">Local</span>
                      <span class="text-[18px]">Data</span>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </transition>

    <div
      class="grid col-span-4 row-span-5 col-start-4 grid-cols-9 grid-rows-10 gap-4 h-auto flex items-center justify-center"
    >
        <img
          :src="currentTestimonial.img"
          alt=""
          class="w-[35em] h-[25em] object-cover col-span-9 row-span-10 rounded overflow-hidden flex items-center justify-center"
        />
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
