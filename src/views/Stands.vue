<script>
import StandsCarrousel from "../components/stands/StandsCarrousel.vue";
import Galleria from "primevue/galleria";
import { useMediaQuery } from "../utils/useMediaQuery";

export default {
  data() {
    return {
      galerryVisible: false,
      activeGallery: undefined,
      scenographicImages: [
        {
          itemImageSrc: "assets/stands/cenografico/graniAmici.webp",
          thumbnailImageSrc: "assets/stands/cenografico/graniAmici.webp",
          alt: "Grani Amici",
        },
        {
          itemImageSrc: "assets/stands/cenografico/origetec01.webp",
          thumbnailImageSrc: "assets/stands/cenografico/origetec01.webp",
          alt: "Origetec",
        },
        {
          itemImageSrc: "assets/stands/cenografico/origetec02.webp",
          thumbnailImageSrc: "assets/stands/cenografico/origetec02.webp",
          alt: "Origetec",
        },
        {
          itemImageSrc: "assets/stands/cenografico/origetec03.webp",
          thumbnailImageSrc: "assets/stands/cenografico/origetec03.webp",
          alt: "Origetec",
        },
        {
          itemImageSrc: "assets/stands/cenografico/porcelanaMonteSiao01.webp",
          thumbnailImageSrc:
            "assets/stands/cenografico/porcelanaMonteSiao01.webp",
          alt: "Porcelana Monte Sião",
        },
        {
          itemImageSrc: "assets/stands/cenografico/porcelanaMonteSiao02.webp",
          thumbnailImageSrc:
            "assets/stands/cenografico/porcelanaMonteSiao02.webp",
          alt: "Porcelana Monte Sião",
        },
        {
          itemImageSrc: "assets/stands/cenografico/porcelanaMonteSiao00.mp4",
          thumbnailImageSrc:
            "assets/stands/cenografico/porcelanaMonteSiao00.mp4",
          alt: "Porcelana Monte Sião",
        },
      ],
      mistImages: [
        {
          itemImageSrc: "assets/stands/misto/evastec01.webp",
          thumbnailImageSrc: "assets/stands/misto/evastec01.webp",
          alt: "Evastec",
        },
        {
          itemImageSrc: "assets/stands/misto/evastec02.webp",
          thumbnailImageSrc: "assets/stands/misto/evastec02.webp",
          alt: "Evastec",
        },
        {
          itemImageSrc: "assets/stands/misto/fhon01.webp",
          thumbnailImageSrc: "assets/stands/misto/fhon01.webp",
          alt: "Fhon",
        },
        {
          itemImageSrc: "assets/stands/misto/fhon02.webp",
          thumbnailImageSrc: "assets/stands/misto/fhon02.webp",
          alt: "Fhon",
        },
        {
          itemImageSrc: "assets/stands/misto/geave01.webp",
          thumbnailImageSrc: "assets/stands/misto/geave01.webp",
          alt: "Geave",
        },
        {
          itemImageSrc: "assets/stands/misto/eccho01.webp",
          thumbnailImageSrc: "assets/stands/misto/eccho01.webp",
          alt: "Eccho",
        },
        {
          itemImageSrc: "assets/stands/misto/fhon02.webp",
          thumbnailImageSrc: "assets/stands/misto/fhon02.webp",
          alt: "Fhon",
        },
      ],
      basicImages: [
        {
          itemImageSrc: "assets/stands/basico/brave00.mp4",
          thumbnailImageSrc: "assets/stands/basico/brave00.mp4",
          alt: "Brave Asset",
        },
        {
          itemImageSrc: "assets/stands/basico/genco01.webp",
          thumbnailImageSrc: "assets/stands/basico/genco01.webp",
          alt: "Brave Asset",
        },
        {
          itemImageSrc: "assets/stands/basico/brave02.webp",
          thumbnailImageSrc: "assets/stands/basico/brave02.webp",
          alt: "Brave Asset",
        },
        {
          itemImageSrc: "assets/stands/basico/agrologic01.webp",
          thumbnailImageSrc: "assets/stands/basico/agrologic01.webp",
          alt: "Agrologic",
        },
        {
          itemImageSrc: "assets/stands/basico/brave03.webp",
          thumbnailImageSrc: "assets/stands/basico/brave03.webp",
          alt: "Brave Asset",
        },

        {
          itemImageSrc: "assets/stands/basico/vemax01.webp",
          thumbnailImageSrc: "assets/stands/basico/vemax01.webp",
          alt: "Vemax",
        },
        {
          itemImageSrc: "assets/stands/basico/genco02.webp",
          thumbnailImageSrc: "assets/stands/basico/genco02.webp",
          alt: "Genco",
        },
      ],
      isMobile: useMediaQuery(),
      responsiveOptions: [
        {
          breakpoint: "1024px",
          containerStyle: "max-width: 60%",
        },
        {
          breakpoint: "768px",
          containerStyle: "max-width: 100%",
        },
        {
          breakpoint: "560px",
          containerStyle: {
            "max-width": "100%",
          },
        },
      ],
      activeIndex: 0,
    };
  },
  components: {
    StandsCarrousel,
    Galleria,
  },
  methods: {
    openGallery(galerry, index) {
      (this.activeGallery = this[galerry]), (this.activeIndex = index || 0);
      this.galerryVisible = true;
    },
    closeGalerry(x) {
      this.galerryVisible = x;
    },
  },
};
</script>

<template>
  <section style="z-indez: 1">
    <StandsCarrousel />
  </section>

  <Galleria
    v-model:visible="galerryVisible"
    @update:visible="closeGalerry"
    v-model:activeIndex="activeIndex"
    :responsiveOptions="responsiveOptions"
    :value="activeGallery"
    containerStyle="max-width: 80%"
    :circular="true"
    :fullScreen="true"
    :showItemNavigators="false"
    :showThumbnails="false"
  >
    <template #item="slotProps">
      <img
        :src="slotProps.item.itemImageSrc"
        :alt="slotProps.item.alt"
        style="width: 100%; display: block"
      />
    </template>
    <template #thumbnail="slotProps">
      <img
        :src="slotProps.item.thumbnailImageSrc"
        :alt="slotProps.item.alt"
        style="display: block"
      />
    </template>
  </Galleria>

  <section class="px-[2em] sm:px-[7em] py-[4em] flex flex-col gap-14">
    <section>
      <span class="font-bold text-[30px] sm:text-[40px]">{{
        $t("stands.scenographic.title")
      }}</span>
      <span class="text-[15px] sm:text-[25px] font-normal">{{
        $t("stands.scenographic.description")
      }}</span>
      <span class="font-bold text-[30px] sm:text-[40px]">{{
        $t("stands.mixed.title")
      }}</span>
      <span class="text-[15px] sm:text-[25px] font-normal">{{
        $t("stands.mixed.description")
      }}</span>
      <span class="font-bold text-[30px] sm:text-[40px]">{{
        $t("stands.basic.title")
      }}</span>
      <span class="text-[15px] sm:text-[25px] font-normal">{{
        $t("stands.basic.description")
      }}</span>
    </section>

    <section class="flex flex-col gap-8">
      <div>
        <div class="grid grid-cols-12 grid-rows-10 gap-4 h-[30em] sm:h-[60em]">
          <div
            @click="openGallery('scenographicImages', 0)"
            class="bg-gray-700 rounded col-span-5 row-span-4 overflow-hidden"
          >
            <img
              :src="scenographicImages[0].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('scenographicImages', 1)"
            class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6 overflow-hidden"
          >
            <img
              :src="scenographicImages[1].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('scenographicImages', 2)"
            class="bg-gray-700 rounded col-span-5 row-span-6 row-start-5 overflow-hidden"
          >
            <img
              :src="scenographicImages[2].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('scenographicImages', 4)"
            class="bg-gray-700 rounded col-span-7 sm:col-span-5 row-span-3 col-start-6 row-start-5 overflow-hidden"
          >
            <img
              :src="scenographicImages[4].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('scenographicImages', 5)"
            class="bg-gray-700 rounded col-span-7 sm:col-span-5 row-span-3 col-start-6 row-start-8 overflow-hidden"
          >
            <img
              :src="scenographicImages[5].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="hidden sm:block bg-gray-700 rounded col-span-2 row-span-6 col-start-11 row-start-5 overflow-hidden"
          >
            <video
              class="w-full h-full object-cover responsive-video"
              controls
              autoplay
              muted
            >
              <source
                :src="scenographicImages[6].itemImageSrc"
                type="video/mp4"
              />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-8">
      <div>
        <div class="grid grid-cols-12 grid-rows-12 gap-4 h-[30em] sm:h-[60em]">
          <div
            @click="openGallery('mistImages', 0)"
            class="bg-gray-700 rounded col-span-5 row-span-4 overflow-hidden"
          >
            <img
              :src="mistImages[0].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 1)"
            class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6 overflow-hidden"
          >
            <img
              :src="mistImages[1].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 2)"
            class="bg-gray-700 rounded col-span-6 sm:col-span-4 row-span-4 row-start-5 overflow-hidden"
          >
            <img
              :src="mistImages[2].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 3)"
            class="bg-gray-700 rounded col-span-6 sm:col-span-4 row-span-4 col-start-1 row-start-9 overflow-hidden"
          >
            <img
              :src="mistImages[3].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 4)"
            class="bg-gray-700 rounded col-span-6 sm:col-span-4 row-span-4 col-start-7 sm:col-start-9 row-start-5 overflow-hidden"
          >
            <img
              :src="mistImages[4].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 5)"
            class="bg-gray-700 rounded col-span-6 sm:col-span-4 row-span-4 col-start-7 sm:col-start-9 row-start-9 overflow-hidden"
          >
            <img
              :src="mistImages[5].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('mistImages', 6)"
            class="hidden sm:block bg-gray-700 rounded col-span-4 row-span-8 col-start-5 row-start-5 overflow-hidden"
          >
            <img
              :src="mistImages[6].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="flex flex-col gap-8">
      <div>
        <div class="grid grid-cols-12 grid-rows-13 gap-4 h-[30em] sm:h-[60em]">
          <div
            class="hidden sm:block bg-gray-700 rounded col-span-2 row-span-8 overflow-hidden"
          >
            <video
              class="w-full h-full object-cover responsive-video"
              controls
              autoplay
              muted
            >
              <source :src="basicImages[0].itemImageSrc" type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
          <div
            @click="openGallery('basicImages', 1)"
            class="bg-gray-700 rounded col-span-4 row-span-5 col-start-1 row-start-9 overflow-hidden"
          >
            <img
              :src="basicImages[1].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('basicImages', 2)"
            class="bg-gray-700 rounded col-span-8 sm:col-span-6 row-span-8 col-start-0 sm:col-start-3 row-start-1 overflow-hidden"
          >
            <img
              :src="basicImages[2].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('basicImages', 3)"
            class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-1 overflow-hidden"
          >
            <img
              :src="basicImages[3].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('basicImages', 5)"
            class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-5 overflow-hidden"
          >
            <img
              :src="basicImages[5].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
          <div
            @click="openGallery('basicImages', 6)"
            class="bg-gray-700 rounded col-span-8 row-span-5 col-start-5 row-start-9 overflow-hidden"
          >
            <img
              :src="basicImages[6].itemImageSrc"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<style>
.responsive-video {
  width: auto;
  height: 100%;
  aspect-ratio: 9/16;
  /* Ajuste conforme necessário */
  object-fit: cover;
  /* Opcional: para preencher o contêiner */
}
</style>
