

<script>
import Carousel from 'primevue/carousel';

export default {

  data(){
    return{
      products: [{
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      },
      {
          image: "123",
          name: "123",
      }] 
    }
  },
  components: {
    Carousel
  }
  
}
</script>

<template>
  <Carousel :value="products" :numVisible="6" :numScroll="1" circular :autoplayInterval="3000">
    <template #item="slotProps">
        <div class="border border-surface-200 rounded bg-gray-500 h-[10em] w-[13em] p-4 m-4">
        </div>
    </template>
</Carousel>

</template>