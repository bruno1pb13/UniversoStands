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
            <div class="flex gap-2 items-center justify-center">
                <img src="/assets/fairs/calendario1.png" alt="" class="w-[40em] h-auto">
                <img src="/assets/fairs/calendario2.png" alt="" class="w-[40em] h-auto">
            </div>
            
            <div class="flex sm:hidden flex-col gap-[2em]">
                <div v-for="i in 7" class="bg-gray-700 rounded">
                    <img :src="randomImage(1920, 1080)" alt="" />
                </div>
            </div>
        </section>
    </div>
</template>
