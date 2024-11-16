<script>
import { useI18n } from "vue-i18n";

export default {
  data() {
    return {
      currentIndex: 0,
      depoiments: null,
    };
  },
  mounted(){
    this.updateDepoiments();
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
    updateDepoiments() {
      let dp = [];

      for (let i = 0; i < 4; i++) {

        let pic = this.$t(`depoiments.list[${i}].picture`)
        if(pic == `depoiments.list[${i}].picture`){
          pic = undefined
        }

        dp.push({
          author: this.$t(`depoiments.list[${i}].author`),
          picture: pic,
          enterprise: this.$t(`depoiments.list[${i}].enterprise`),
          content: this.$t(`depoiments.list[${i}].content`),
          img: this.$t(`depoiments.list[${i}].img`),
          standType: this.$t(`depoiments.list[${i}].standType`),
          locale: this.$t(`depoiments.list[${i}].locale`),
          date: this.$t(`depoiments.list[${i}].date`),
        });
      }

      this.depoiments = dp;
    },
  },
  watch: {
    '$i18n.locale': function(newLocale, oldLocale) {
      this.updateDepoiments();
    }
  }
};
</script>

<template>
  <div
    v-if="depoiments"
    class="hidden sm:grid grid-cols-5 grid-rows-5 bg-[#E6007E] p-[7vw] gap-[7vw] relative"
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

    <span
      class="absolute left-[7vw] top-[14vh] font-bold text-[40px] text-center text-white"
      >{{ $t("home.depoiments.title") }}</span
    >

    <transition name="fade" mode="out-in" class="">
      <div
        :key="currentIndex"
        class="col-span-3 row-span-5 pt-[5em] text-white flex flex-col h-auto justify-between"
      >
        <div class="h-8"></div>
        <div class="flex gap-4">
          <div class="rounded overflow-hidden">
            <img v-if="currentTestimonial.picture"
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
        <span class="text-[20px] w-full min-h-[8em]">{{
          currentTestimonial.content
        }}</span>
        <div class="h-8"></div>
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
  <div
    v-if="depoiments"
    class="sm:hidden flex flex-col gap-4 bg-[#E6007E] p-[7vw] gap-[7vw] relative"
  >
    <span class="font-bold text-[40px] text-center text-white">{{
      $t("home.depoiments.title")
    }}</span>

    <transition name="fade" mode="out-in" class="">
      <div
        :key="currentIndex"
        class="col-span-3 row-span-5 text-white flex flex-col h-auto justify-between"
      >
        <div class="h-8"></div>
        <div class="flex gap-4 pb-[2em]">
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
        <span class="text-[15px] w-full">{{ currentTestimonial.content }}</span>
      </div>
    </transition>
    <div class="flex gap-2 justify-end">
      <div
        @click="prevTestimonial"
        class="left-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
      >
        <img src="/assets/icons/arrow_circle.png" alt="Previous" />
      </div>
      <div
        @click="nextTestimonial"
        class="right-[2vw] top-[50%] w-[3em] h-[3em] rounded-full cursor-pointer hover:scale-[1.05] duration-200 ease-in-out"
      >
        <img
          src="/assets/icons/arrow_circle.png"
          alt="Next"
          class="rotate-180"
        />
      </div>
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
