<script>
import FeirasCarrousel from '../components/feiras/FeirasCarrousel.vue';
export default{
    components: {
        FeirasCarrousel
    }
}
</script>

<template>
    <section class="mt-[5em] sm:mt-[10em] flex flex-col gap-[4em] text-center  ">
        <h1 class="font-bold text-[40px]">{{$t('fairs.title')}}</h1>
        <span class="text-[20px] px-[2em] sm:px-[14em]">{{$t('fairs.description')}}</span>
    </section>
    <section>
        <FeirasCarrousel/>
    </section>
    <section class="px-[2em] sm:px-[7em] py-[10em]">
        <div class="grid grid-cols-12 grid-rows-10 gap-4  h-[30em] sm:h-[60em]">
            <div class="bg-gray-700 rounded col-span-5 row-span-4">1</div>
            <div class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6">2</div>
            <div class="bg-gray-700 rounded col-span-3 row-span-3 row-start-5">3</div>
            <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-1 row-start-8">4</div>
            <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-5">5</div>
            <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-8">6</div>
            <div class="bg-gray-700 rounded col-span-6 row-span-6 col-start-7 row-start-5">7</div>
        </div>
    </section>
</template>