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
  <div class="overflow-y-hidden">
    <MainNavBar />
    <Transition name="fade">
      <RouterView />
    </Transition>
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