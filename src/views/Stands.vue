<script>
import StandsCarrousel from "../components/stands/StandsCarrousel.vue";
import Galleria from 'primevue/galleria';
import { useMediaQuery } from "../utils/useMediaQuery";

export default {
    data() {
        return {
            galerryVisible: false,
            activeGallery: undefined,
            scenographicImages: [
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=1',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=1',
                    alt: 'Imagem 1',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=2',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=2',
                    alt: 'Imagem 2',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=3',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=3',
                    alt: 'Imagem 3',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=4',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=4',
                    alt: 'Imagem 4',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=5',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=5',
                    alt: 'Imagem 5',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=6',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=6',
                    alt: 'Imagem 6',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=7',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=7',
                    alt: 'Imagem 7',
                }
            ],
            mistImages: [
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=11',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=11',
                    alt: 'Imagem 11',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=21',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=21',
                    alt: 'Imagem 21',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=31',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=31',
                    alt: 'Imagem 31',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=41',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=41',
                    alt: 'Imagem 41',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=51',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=51',
                    alt: 'Imagem 51',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=61',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=61',
                    alt: 'Imagem 61',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=71',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=71',
                    alt: 'Imagem 71',
                }
            ],
            basicImages: [
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=12',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=12',
                    alt: 'Imagem 12',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=22',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=22',
                    alt: 'Imagem 22',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=32',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=32',
                    alt: 'Imagem 32',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=42',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=42',
                    alt: 'Imagem 42',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=52',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=52',
                    alt: 'Imagem 52',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=62',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=62',
                    alt: 'Imagem 62',
                },
                {
                    itemImageSrc: 'https://picsum.photos/1920/1080?anticache=72',
                    thumbnailImageSrc: 'https://picsum.photos/1920/1080?anticache=72',
                    alt: 'Imagem 72',
                }
            ],
            isMobile: useMediaQuery(),
            responsiveOptions: [
                {
                    breakpoint: '1024px',
                    containerStyle: "max-width: 60%",


                },
                {
                    breakpoint: '768px',
                    containerStyle: "max-width: 100%",

                },
                {
                    breakpoint: '560px',
                    containerStyle: {
                        "max-width" : "100%"
                    },
                }
            ],
            activeIndex: 0
        }
    },
    components: {
        StandsCarrousel,
        Galleria
    },
    methods: {
        openGallery(galerry, index) {
            this.activeGallery = this[galerry],
            this.activeIndex = index || 0
            this.galerryVisible = true
        },
        closeGalerry(x) {
            this.galerryVisible = x
        }
    }
};
</script>

<template>
    <section style="z-indez: 1">
        <StandsCarrousel />
    </section>

    <Galleria v-model:visible="galerryVisible" @update:visible="closeGalerry" v-model:activeIndex="activeIndex"
        :responsiveOptions="responsiveOptions" :value="activeGallery"  containerStyle="max-width: 80%"
        :circular="true" :fullScreen="true" :showItemNavigators="false" :showThumbnails="false">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
    </Galleria>

    <section class="px-[2em] sm:px-[7em] py-[4em] flex flex-col gap-14">
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[30px] sm:text-[40px]">{{ $t('stands.scenographic.title') }}</span>
            <span class="text-[15px] sm:text-[25px] font-normal">{{ $t('stands.scenographic.description') }}</span>
            <div>
                <div class="grid grid-cols-12 grid-rows-10 gap-4 h-[30em] sm:h-[60em]">
                    <div @click="openGallery('scenographicImages', 0)"
                        class="bg-gray-700 rounded col-span-5 row-span-4 overflow-hidden">
                        <img :src="scenographicImages[0].itemImageSrc" class="w-full h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 1)"
                        class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6 overflow-hidden">
                        <img :src="scenographicImages[1].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 2)"
                        class="bg-gray-700 rounded col-span-3 row-span-3 row-start-5 overflow-hidden">
                        <img :src="scenographicImages[2].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 3)"
                        class="bg-gray-700 rounded col-span-3 row-span-3 col-start-1 row-start-8 overflow-hidden">
                        <img :src="scenographicImages[3].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 4)"
                        class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-5 overflow-hidden">
                        <img :src="scenographicImages[4].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 5)"
                        class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-8 overflow-hidden">
                        <img :src="scenographicImages[5].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('scenographicImages', 6)"
                        class="bg-gray-700 rounded col-span-6 row-span-6 col-start-7 row-start-5 overflow-hidden">
                        <img :src="scenographicImages[6].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[30px] sm:text-[40px]">{{ $t('stands.mixed.title') }}</span>
            <span class="text-[15px] sm:text-[25px] font-normal">{{ $t('stands.mixed.description') }}</span>
            <div>
                <div class="grid grid-cols-12 grid-rows-12 gap-4 h-[30em] sm:h-[60em]">
                    <div @click="openGallery('mistImages', 0)"
                        class="bg-gray-700 rounded col-span-5 row-span-4 overflow-hidden">
                        <img :src="mistImages[0].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 1)"
                        class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6 overflow-hidden">
                        <img :src="mistImages[1].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 2)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 row-start-5 overflow-hidden">
                        <img :src="mistImages[2].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 3)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-1 row-start-9 overflow-hidden">
                        <img :src="mistImages[3].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 4)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-5 overflow-hidden">
                        <img :src="mistImages[4].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 5)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-9 overflow-hidden">
                        <img :src="mistImages[5].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('mistImages', 6)"
                        class="bg-gray-700 rounded col-span-4 row-span-8 col-start-5 row-start-5 overflow-hidden">
                        <img :src="mistImages[6].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[30px] sm:text-[40px]">{{ $t('stands.basic.title') }}</span>
            <span class="text-[15px] sm:text-[25px] font-normal">{{ $t('stands.basic.description') }}</span>

            <div>
                <div class="grid grid-cols-12 grid-rows-12 gap-4 h-[30em] sm:h-[60em]">
                    <div @click="openGallery('basicImages', 0)"
                        class="bg-gray-700 rounded col-span-4 row-span-8 overflow-hidden">
                        <img :src="basicImages[0].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 1)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-1 row-start-9 overflow-hidden">
                        <img :src="basicImages[1].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 2)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-5 row-start-1 overflow-hidden">
                        <img :src="basicImages[2].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 3)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-1 overflow-hidden">
                        <img :src="basicImages[3].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 4)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-5 row-start-5 overflow-hidden">
                        <img :src="basicImages[4].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 5)"
                        class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-5 overflow-hidden">
                        <img :src="basicImages[5].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                    <div @click="openGallery('basicImages', 6)"
                        class="bg-gray-700 rounded col-span-8 row-span-4 col-start-5 row-start-9 overflow-hidden">
                        <img :src="basicImages[6].itemImageSrc" class="w-full  h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
