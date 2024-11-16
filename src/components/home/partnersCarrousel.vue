<script>
import Carousel from 'primevue/carousel';

export default {

    data() {
        return {
            partners: [
                { image: "/assets/partners/dazEventos.webp", name: "Daz Eventos" , link: "https://www.instagram.com/daz_eventos/" },
                { image: "/assets/partners/BrindesImport.webp", name: "Brinder Import", link:"https://brindesimport.com.br/"},
                { image: "/assets/partners/NB.webp", name: "NB", link: "https://www.nb3locacoes.com.br/"},
                { image: "/assets/partners/PontoDosBrindes.webp", name: "Ponto dos brindes", link:"https://www.instagram.com/pontodosbrindes_oficial/"},
                { image: "/assets/partners/zwEventos.webp", name: "ZW Eventos", link: "https://www.instagram.com/zweeventos/" },
                { image: "/assets/partners/doc.webp", name: "Doc", link: "https://www.docparaeventos.com.br/"},
                { image: "/assets/partners/danLu.webp", name: "danLu", link: "https://www.instagram.com/danlu.buffet?igsh=bXNibWwyaGZ2bXpw" },
                { image: "/assets/partners/rrPersonalizados.webp", name: "RRPersonalizados", link: "https://wa.me/555197908970" },
                { image: "/assets/partners/primeTravel.webp", name: "Prime Travel", link:"https://www.instagram.com/primetravel_viagens?igsh=ejhndGxrN2IxZ20z"},
                
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
                    numVisible: 1,
                    numScroll: 1,
                }
            ]
        }
    },
    methods: {
        open(link){
            if(link)
                window.open(link, '_blank');
        }
    },
    components: {
        Carousel
    }

}
</script>

<template>
    <Carousel :value="[...partners, ...partners]" :numVisible="6" :numScroll="2" circular :autoplayInterval="3000" :showIndicators="false" :responsiveOptions="responsiveOptions">
        <template #item="slotProps">
            <div @click="open(slotProps.data.link)" :class="slotProps.data.link? ' cursor-pointer' : '' " class=" carousel-item-container rounded p-4 m-4 flex items-center justify-center">
                <img :src="slotProps.data.image" alt="" class="carousel-image">
            </div>
        </template>
    </Carousel>
</template>

<style>
.carousel-item-container {
    width: 10em;
    height: 10em;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
}
</style>