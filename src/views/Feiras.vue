<script>
import FeirasCarrousel from "../components/feiras/FeirasCarrousel.vue";
import randomImage from "../utils/randomImage";
export default {
    methods: {
        randomImage,
    },
    components: {
        FeirasCarrousel,
    },
};
</script>

<template>
    <div class="flex flex-col gap-[4em] my-[5em] sm:mt-[9em]">
        <section class=" flex flex-col gap-[2em] text-center">
            <h1 class="font-bold text-[40px]">{{ $t("fairs.title") }}</h1>
            <span class="text-[15px] sm:text-[20px] px-[2em] sm:px-[14em] text-justify sm:text-center ">{{
                $t("fairs.description")
            }}</span>
        </section>
        <section>
            <FeirasCarrousel />
        </section>
        <section class="px-[2em] sm:px-[7em] ">
            <div class="hidden sm:grid grid-cols-12 grid-rows-10 gap-4 h-[30em] sm:h-[60em]">
                <div class="bg-gray-700 rounded col-span-5 row-span-4 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-3 row-span-3 row-start-5 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-1 row-start-8 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-5 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-8 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
                <div class="bg-gray-700 rounded col-span-6 row-span-6 col-start-7 row-start-5 overflow-hidden flex items-center justify-start">
                    <img :src="randomImage(1920, 1080)" alt="" class="w-full h-full object-cover" />
                </div>
            </div>
            
            <div class="flex sm:hidden flex-col gap-[2em]">
                <div v-for="i in 7" class="bg-gray-700 rounded">
                    <img :src="randomImage(1920, 1080)" alt="" />
                </div>
            </div>
        </section>
    </div>
</template>
