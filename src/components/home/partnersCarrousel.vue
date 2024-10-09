<script>
import Carousel from 'primevue/carousel';

export default {

    data() {
        return {
            partners: [{
                image: "/assets/partners/doc.png",
                name: "Doc",
            },
            {
                image: "/assets/partners/BrindesImport.png",
                name: "Brinder Import",
            },
            {
                image: "/assets/partners/NB.jpg",
                name: "NB",
            },
            {
                image: "/assets/partners/PontoDosBrindes.png",
                name: "Ponto dos brindes",
            },
            ]
        }
    },
    components: {
        Carousel
    }

}
</script>

<template>
    <div class="sm:flex hidden gap-1 sm:gap-4 justify-center">
        <div v-for="partner in partners"  class="border border-surface-200 rounded h-auto sm:h-[10em]  w-[50em] sm:w-[13em] p-4 m-4 ">
            <img :src="partner.image" :alt="partner.name" class="w-full h-full object-contain " alt="">
        </div>
    </div>

    <div  class="flex sm:hidden" >
        <Carousel :value="partners" :numVisible="3" :numScroll="1" circular :autoplayInterval="3000">
            <template #item="slotProps">
                <div class=" rounded h-[10em] w-[13em] p-4 m-4 flex items-center justify-center">
                    <img :src="slotProps.data.image" alt="" srcset="">
                </div>
            </template>
        </Carousel>
    </div>

</template>