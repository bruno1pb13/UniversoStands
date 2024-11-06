

<script>
import Carousel from 'primevue/carousel';

export default {

  data(){
    return{
      fairs: [{
          image: "/assets/fairs/abup_logo.png",
          name: "Abup decor show",
      },
      {
          image: "/assets/fairs/ajorsul_logo.webp",
          name: "XXXIV Ajorsul fair mercoóptica 2024",
      },
      {
          image: "/assets/fairs/autopar.png",
          name: "Autopar 12ª Feira de fornecedores da indústria automotiva",
      },
      {
          image: "/assets/fairs/eletrometal_logo.png",
          name: "Eletro Metal Mecânica 2024",
      },
      {
          image: "/assets/fairs/escolar.png",
          name: "Escolar office Brasil",
      },
      {
          image: "/assets/fairs/expoagas.png",
          name: "Expoagas",
      },
      {
          image: "/assets/fairs/feira_hospitalar.png",
          name: "Hospitalar By Informa Markets",
      },
      {
          image: "/assets/fairs/fispal_tec.webp",
          name: "Fispal Tecnologia 2025",
      },
      {
          image: "/assets/fairs/logo_construsul.png",
          name: "Construsul",
      },
      {
          image: "/assets/fairs/logo_febratex.png",
          name: "Feira Brasileira para a indústria têxtil",
      },
      {
          image: "/assets/fairs/logo_intersolar.png",
          name: "inter solar connection solar business | South America",
      },
      {
          image: "/assets/fairs/logo_pet.png",
          name: "pet",
      },
      {
          image: "/assets/fairs/movelsul_logo.jpg",
          name: "Movelsul, Feira de móveis | Brasil",
      },
      {
          image: "/assets/fairs/AgresteTex.png",
          name: "Agreste Tex",
      },
      {
          image: "/assets/fairs/BeautyEstheticShow.png",
          name: "Beauty & Esthetic Show",
      },
      {
          image: "/assets/fairs/febratexSummit.png",
          name: "Febratex Summit",
      },
      {
          image: "/assets/fairs/Febratex.png",
          name: "Febratex",
      },
      {
          image: "/assets/fairs/febraTextil.png",
          name: "Febra Têxtil",
      },
      {
          image: "/assets/fairs/MaquintexSigns.png",
          name: "Maquintex Signs Pack&Graph Fortaleza",
      },
      {
          image: "/assets/fairs/tecnotextilBrail.png",
          name: "Tecnotêxtil Feira Brasil Têxtil",
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
    <Carousel :value="fairs" :numVisible="6" :numScroll="2" circular :autoplayInterval="3000" :showIndicators="false" :responsiveOptions="responsiveOptions">
      <template #item="slotProps">
        <div class="rounded h-[10vw] w-[25vh] p-4 m-4 flex items-center justify-center">
          <img :src="slotProps.data.image" alt="" class="w-full h-auto object-contain">
        </div>
      </template>
    </Carousel>
  </template>