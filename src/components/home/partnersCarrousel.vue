<script>
import Carousel from 'primevue/carousel';

export default {

    data() {
        return {
            partners: [
            {
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
            {
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
            {
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
            ],
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    numVisible: 4,
                    numScroll: 2
                },
                {
                    breakpoint: '768px',
                    numVisible: 2,
                    numScroll: 1
                },
                {
                    breakpoint: '560px',
                    numVisible: 2,
                    numScroll: 1,
                }
            ]
        }
    },
    components: {
        Carousel
    }

}
</script>

<template>
    <Carousel :value="partners" :numVisible="6" :numScroll="2" circular :autoplayInterval="3000" :showIndicators="false" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <div class=" rounded p-4 m-4 flex items-center justify-center">
                <img :src="slotProps.data.image" alt="" srcset="" class="w-full h-auto">
            </div>
        </template>
    </Carousel>
</template>