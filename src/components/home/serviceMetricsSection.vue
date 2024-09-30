
<script>
export default{
    data(){
        return {
            clientes: 0,
            feiras: 0,
            metros: 0,
        }
    },
    mounted() {
        this.animateNumber("clientes", 0, 2000, 2000);
        this.animateNumber("feiras", 0, 200, 2000);
        this.animateNumber("metros", 0, 5000, 100);
    },
    methods: {
        animateNumber(elementId, start, end, duration) {
            const range = Math.abs(end - start);  // Valor absoluto da diferença
            let current = start;
            const increment = end > start ? 1 : -1;  // Define o incremento positivo ou negativo
            const stepTime = duration / range;  // Proporção do tempo em relação ao range
            console.log(stepTime, elementId);
            const timer = setInterval(() => {
                current += increment;
                this[elementId] = current;
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    },
}
</script>
<template>
    <div class="flex align-center justify-between px-[14vw] text-center mb-[10em] mt-[5em]">
        <div class="flex flex-col w-[18vw]">
            <span class="font-bold text-[82px]" id="clientes">{{ clientes }}</span>
            <span class="text-[30px]">{{$t('home.metrics.customers_served')}}</span>
        </div>
        <div class="flex flex-col w-[18vw]">
            <span class="font-bold text-[82px]" id="feiras">{{ feiras }}</span>
            <span class="text-[30px]">{{$t('home.metrics.mounted_fairs')}}</span>
        </div>
        <div class="flex flex-col w-[18vw]">
            <span class="font-bold text-[82px]" id="metros">{{ metros }}</span>
            <span class="text-[30px]">{{$t('home.metrics.m_Built')}}</span>
        </div>
    </div>
</template>