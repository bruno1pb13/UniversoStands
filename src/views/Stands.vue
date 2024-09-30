<script>
import StandsCarrousel from "../components/stands/StandsCarrousel.vue";

export default {
    components: {
        StandsCarrousel,
    },
};
</script>

<template>
    <section style="z-indez: 1">
        <StandsCarrousel />
    </section>
    <section class="px-[7em] py-[4em] flex flex-col gap-14">
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[40px]">{{$t('stands.scenographic.title')}}</span>
            <span class="text-[25px] font-normal">{{$t('stands.scenographic.description')}}</span>
            <div>
                <div class="grid grid-cols-12 grid-rows-10 gap-4 h-[60em]">
                    <div class="bg-gray-700 rounded col-span-5 row-span-4">1</div>
                    <div class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6">
                        2
                    </div>
                    <div class="bg-gray-700 rounded col-span-3 row-span-3 row-start-5">
                        3
                    </div>
                    <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-1 row-start-8">
                        4
                    </div>
                    <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-5">
                        5
                    </div>
                    <div class="bg-gray-700 rounded col-span-3 row-span-3 col-start-4 row-start-8">
                        6
                    </div>
                    <div class="bg-gray-700 rounded col-span-6 row-span-6 col-start-7 row-start-5">
                        7
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[40px]">{{$t('stands.mixed.title')}}</span>
            <span class="text-[25px] font-normal">{{$t('stands.mixed.description')}}</span>
            <div>
                <div class="grid grid-cols-12 grid-rows-12 gap-4 h-[60em]">
                    <div class="bg-gray-700 rounded col-span-5 row-span-4">1</div>
                    <div class="bg-gray-700 rounded col-span-7 row-span-4 col-start-6">
                        2
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 row-start-5">
                        3
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-1 row-start-9">
                        4
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-5">
                        5
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-9">
                        6
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-8 col-start-5 row-start-5">
                        7
                    </div>
                </div>
            </div>
        </section>
        <section class="flex flex-col gap-8">
            <span class="font-bold text-[40px]">{{$t('stands.basic.title')}}</span>
            <span class="text-[25px] font-normal">{{$t('stands.basic.description')}}</span>

            <div>
                <div class="grid grid-cols-12 grid-rows-12 gap-4 h-[60em]">
                    <div class="bg-gray-700 rounded col-span-4 row-span-8">1</div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-1 row-start-9">
                        2
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-5 row-start-1">
                        3
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-1">
                        4
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-5 row-start-5">
                        5
                    </div>
                    <div class="bg-gray-700 rounded col-span-4 row-span-4 col-start-9 row-start-5">
                        6
                    </div>
                    <div class="bg-gray-700 rounded col-span-8 row-span-4 col-start-5 row-start-9">
                        7
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>
