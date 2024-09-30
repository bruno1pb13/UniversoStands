<script>
import FeirasCarrousel from '../components/feiras/FeirasCarrousel.vue';
export default{
    components: {
        FeirasCarrousel
    }
}
</script>

<template>
    <section class="h-[30em] mt-[10em] flex flex-col gap-[4em] text-center ">
        <h1 class="font-bold text-[40px]">Feiras</h1>
        <span class="text-[20px] px-[14em]">Participar de feiras é uma oportunidade única para destacar sua marca e alcançar novos clientes. Estamos presentes nos maiores eventos do setor, proporcionando soluções criativas e funcionais que impulsionam o seu sucesso. Explore abaixo alguns dos eventos em que marcamos presença.</span>
        <FeirasCarrousel/>
    </section>
    <section class="px-[7em] py-[10em]">
        <div class="grid grid-cols-12 grid-rows-10 gap-4  h-[60em]">
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