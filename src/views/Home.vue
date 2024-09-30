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
    <div class="">
        <div class="bg-[var(--purple)] w-full h-[80vh] overflow-visible">
            <div class="flex flex-col justify-between h-full">
                <div id="securityZone" class="pt-[5em]"></div>
                <section class="px-[8.5em] py-[5.5em]">
                    <h1 class="text-[55px] leading-tight text-white font-[700]">
                        {{ $t('home.slogan[0]') }}
                    </h1>
                    <h1 class="text-[55px] leading-tight text-white font-[700]">
                        {{ $t('home.slogan[1]') }}
                    </h1>
                </section>
                <div class="pattern w-full h-[8em]"></div>
            </div>
        </div>
        <div class="relative w-full h-[60vh] ">
            <div
                class="absolute top-[-10em] left-1/2 transform -translate-x-1/2  w-[50vw] h-[68vh] rounded-xl overflow-hidden drop-shadow-md">
                <img src="/pictures/banner.png" class="w-full h-auto object-cover" alt="">
            </div>
        </div>

        <serviceMetricsSection />
        <portfolioSection />

        <div class="flex flex-col pt-[14vh] pb-[20vh] gap-[7vw]">
            <span class="text-center text-[40px] font-bold">{{$t('home.partners')}} </span>
            <partnersCarrousel />
        </div>

        <depoimentsSection/>
        <callUsSection/>
    </div>
</template>
