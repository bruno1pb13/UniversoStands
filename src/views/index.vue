<script>
import MainNavBar from "../components/navigation/MainNavBar.vue";
import Mainfooter from "../components/navigation/footer.vue";

export default {
  methods: {
    openWhatspp() {
      window.open('https://www.whatsapp.com/?lang=pt_BR', '_blank');
    }
  },
  components: {
    MainNavBar,
    Mainfooter,
  },
};
</script>

<template>
  <div class="fixed bottom-5 right-5 z-[1000]">
    <a
      href="https://wa.me/5511999999999" 
      target="_blank" 
      class="p-4 rounded-full shadow-lg "
    >
    <img src="/assets/wp.webp" class="w-[5em] sm:w-[8em] h-auto hover:scale-110 easy-in-out duration-100">
    </a>
  </div>

  <div>
    <MainNavBar />
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <Mainfooter />
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>