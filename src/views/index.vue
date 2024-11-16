<script>
import MainNavBar from "../components/navigation/MainNavBar.vue";
import Mainfooter from "../components/navigation/footer.vue";

export default {
  components: {
    MainNavBar,
    Mainfooter,
  },
};
</script>

<template>
  <div class="fixed bottom-5 right-5 z-[1000]">
    <a
      title="Whatsapp"
      href="https://api.whatsapp.com/send?phone=5551999450382&text=Mais%20informa%C3%A7%C3%B5es%20sobre:" 
      target="_blank" 
      class="p-4 rounded-full shadow-lg "
    >
    <img src="/assets/wp.webp" alt="whatsapp" class="w-[5em] sm:w-[8em] h-auto hover:scale-110 easy-in-out duration-100">
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