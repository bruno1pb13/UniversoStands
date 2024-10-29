<script>
import callUsSection from '../components/home/callUsSection.vue';
import depoimentsSection from '../components/home/depoimentsSection.vue';
import portfolioSection from '../components/home/portfolioSection.vue'
import partnersCarrousel from '../components/home/partnersCarrousel.vue';
import serviceMetricsSection from "../components/home/serviceMetricsSection.vue"

export default {
    components: {
        callUsSection,
        depoimentsSection,
        portfolioSection,
        partnersCarrousel,
        serviceMetricsSection,
    }
}
</script>
<template>
    <div class="max-w-[100vw] overflow-hidden">
        <div class="bg-[var(--purple)] w-full sm:h-[80vh] overflow-visible">
            <div class="flex flex-col justify-between h-full">
                <div id="securityZone" class="pt-[2em] sm:pt-[5em]"></div>
                <section class="hidden sm:block px-[3em] sm:px-[8.5em] py-[5.5em]">
                    <h1 class="text-[30px] sm:text-[55px] leading-tight text-white font-[700]">
                        {{ $t('home.slogan[0]') }}
                    </h1>
                    <h1 class="text-[30px] sm:text-[55px] leading-tight text-white font-[700]">
                        {{ $t('home.slogan[1]') }}
                    </h1>
                </section>
                <section class="block sm:hidden px-[3em] sm:px-[8.5em] pt-[5em] pb-[2em]">
                    <h1 class="text-[25px] leading-tight text-pretty  text-white font-[700]">
                        {{ $t('home.slogan[0]') + ' ' + $t('home.slogan[1]') }} 
                    </h1>
                </section>
                <div class="pattern w-full h-[5em] sm:h-[8em]"></div>
            </div>
        </div>
        <div class="relative w-full h-[20vh] sm:h-[60vh] ">
            <div
                class="absolute top-[-3em] sm:top-[-10em] left-1/2 transform -translate-x-1/2  w-[80vw] sm:w-[50vw] h-[68vh] rounded-xl overflow-hidden drop-shadow-md">
                <img src="/pictures/banner.png" class="w-full h-auto object-cover" alt="">
            </div>
        </div>

        <serviceMetricsSection />
        <portfolioSection />

        <div class="flex flex-col pt-[7vh] sm:pt-[6vh] pb-[7vh] sm:pb-[15vh] gap-[7vw]">
            <span class="text-center text-[40px] font-bold">{{$t('home.partners')}} </span>
            <div>
                <partnersCarrousel />
            </div>
        </div>

        <depoimentsSection/>
        <callUsSection/>
    </div>
</template>
