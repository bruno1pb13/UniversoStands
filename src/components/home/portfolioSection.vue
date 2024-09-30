<script>
export default{
    methods: {
        goToStands(){
            this.$router.push({name: 'STANDS'})
        }
    }
}
</script>
<template>
    <div class="grid grid-cols-5 grid-rows-5 bg-[#E6007E] p-[7vw] gap-[7vw]">

        <div class="col-span-3 row-span-5  text-white flex flex-col h-auto justify-between">
            <span class="font-bold text-[40px]">{{ $t('home.portfolio.title') }}</span>
            <span class="text-[20px]">{{ $t('home.portfolio.text_01') }}</span>
            <button @click="goToStands()" class="bg-[#663399] w-[75%] h-[60px] rounded-full flex justify-between items-center px-[2em]">
                <span  class="text-[20px] font-normal " style="font-weight:300">{{ $t('home.portfolio.redirect_button')
                    }}</span>
                <img src="/assets/icons/Arrow.svg" alt="">
            </button>
        </div>

        <div class="grid col-span-4 row-span-5 col-start-4  grid-cols-9 grid-rows-10 gap-4 h-auto">
            <div class="col-span-4 row-span-5 bg-[white] rounded">1</div>
            <div class="col-span-5 row-span-5 col-start-5 bg-[white] rounded">2</div>
            <div class="col-span-5 row-span-5 row-start-6 bg-[white] rounded">3</div>
            <div class="col-span-4 row-span-5 col-start-6 row-start-6 bg-[white] rounded">4</div>
        </div>

    </div>
</template>