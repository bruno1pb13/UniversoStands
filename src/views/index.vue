<script>

import MainNavBar from '../components/navigation/MainNavBar.vue';
import Mainfooter from '../components/navigation/footer.vue';

export default {
  components: {
    MainNavBar,
    Mainfooter
  },

};
</script>

<template>
  <div class="overflow-y-hidden">
    <MainNavBar />
    <div>
      <RouterView />
    </div>
    <Mainfooter/>
  </div>
</template>