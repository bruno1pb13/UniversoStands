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
        const totalDuration = 4000; // Tempo total para todos os números (2 segundos)
        this.animateNumber("clientes", 0, 2000, totalDuration);
        this.animateNumber("feiras", 0, 200, totalDuration);
        this.animateNumber("metros", 0, 5000, totalDuration);
    },
    methods: {
        animateNumber(elementId, start, end, totalDuration) {
            const range = Math.abs(end - start);  // Valor absoluto da diferença
            let current = start;
            const increment = range / totalDuration * 10;  // Ajusta o incremento proporcional ao range e ao tempo total
            const stepTime = 10;  // Intervalo de atualização de 10ms para suavidade
            const timer = setInterval(() => {
                if (increment > 0 && current + increment >= end) {
                    current = end;
                } else if (increment < 0 && current + increment <= end) {
                    current = end;
                } else {
                    current += increment;
                }
                this[elementId] = Math.round(current); // Arredonda para valores inteiros
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    },
}
</script>
<template>
    <div class="flex flex-col gap-8 sm:gap-0 sm:flex-row align-center justify-between px-[14vw] text-center mb-[5em] sm:mb-[10em] mt-[2em] sm:mt-[5em]">
        <div class="flex flex-col w-full sm:w-[18vw]">
            <span class="font-bold text-[82px]" id="clientes">{{ clientes }}</span>
            <span class="text-[30px]">{{$t('home.metrics.customers_served')}}</span>
        </div>
        <div class="flex flex-col w-full sm:w-[18vw]">
            <span class="font-bold text-[82px]" id="feiras">{{ feiras }}</span>
            <span class="text-[30px]">{{$t('home.metrics.mounted_fairs')}}</span>
        </div>
        <div class="flex flex-col w-full sm:w-[18vw]">
            <span class="font-bold text-[82px]" id="metros">{{ metros }}</span>
            <span class="text-[30px]">{{$t('home.metrics.m_Built')}}</span>
        </div>
    </div>
</template>