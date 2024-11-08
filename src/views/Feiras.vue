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
        <section class="px-[2em] sm:px-[7em] w-full">
            <span class="flex items-center justify-center text-center py-4 text-[20px] w-full">
                {{$t("fairs.partner")}}
            </span>
            <div class="flex flex-col sm:flex-row gap-2 items-center justify-center">
                <img src="/assets/fairs/calendario1.png" alt="" class="w-[40em] h-auto">
                <img src="/assets/fairs/calendario2.png" alt="" class="w-[40em] h-auto">
            </div>
        </section>
    </div>
</template>
