<script>
import randomImage from '../../utils/randomImage';
export default{
    data(){
        return {
            stands: [
                {
                    itemImageSrc: 'assets/stands/cenografico/graniAmici.webp',
                    thumbnailImageSrc: 'assets/stands/cenografico/graniAmici.webp',
                    alt: 'Grani Amici',
                },
                {
                    itemImageSrc: 'assets/stands/cenografico/origetec01.webp',
                    thumbnailImageSrc: 'assets/stands/cenografico/origetec01.webp',
                    alt: 'Origetec',
                },
                {
                    itemImageSrc: 'assets/stands/cenografico/porcelanaMonteSiao01.webp',
                    thumbnailImageSrc: 'assets/stands/cenografico/porcelanaMonteSiao01.webp',
                    alt: 'Porcelana Monte Sião',
                },
                {
                    itemImageSrc: 'assets/stands/misto/evastec02.webp',
                    thumbnailImageSrc: 'assets/stands/misto/evastec02.webp',
                    alt: 'Evastec',
                },
            ]
        }
    },
    methods: {
        randomImage,
        goToStands(){
            this.$router.push({name: 'STANDS'})
        }
    }
}
</script>
<template>
    <div class="hidden sm:grid grid-cols-5 grid-rows-5 bg-[#E6007E] p-[7vw] gap-[7vw]">

        <div class="col-span-3 row-span-5  text-white flex flex-col h-auto justify-between">
            <span class="font-bold text-[40px]">{{ $t('home.portfolio.title') }}</span>
            <span class="text-[20px]">{{ $t('home.portfolio.text_01') }}</span>
            <button id="goToStands" title="Redirect to stands"  @click="goToStands()" class="bg-[#663399] w-[75%] h-[60px] rounded-full flex justify-between items-center px-[2em] group ">
                <span  class="text-[20px] font-normal " style="font-weight:300">{{ $t('home.portfolio.redirect_button')
                    }}</span>
                <img src="/assets/icons/Arrow.svg" alt="" class="group-hover:animate-bounce-horizontal">
            </button>
        </div>

        <div class="grid col-span-4 row-span-5 col-start-4  grid-cols-9 grid-rows-10 gap-4 h-auto">
            <div class="col-span-4 row-span-5 bg-[white] rounded overflow-hidden flex items-center justify-start">
                <img :src="stands[0].itemImageSrc" class="w-full h-full object-cover" alt="stand">
            </div>
            <div class="col-span-5 row-span-5 col-start-5 bg-[white] rounded overflow-hidden flex items-center justify-start">
                <img :src="stands[1].itemImageSrc" class="w-full h-full object-cover" alt="stand">

            </div>
            <div class="col-span-5 row-span-5 row-start-6 bg-[white] rounded overflow-hidden flex items-center justify-start">
                <img :src="stands[2].itemImageSrc" class="w-full h-full object-cover" alt="stand">

            </div>
            <div class="col-span-4 row-span-5 col-start-6 row-start-6 bg-[white] rounded overflow-hidden flex items-center justify-start">
                <img :src="stands[3].itemImageSrc" class="w-full h-full object-cover" alt="stand">
            </div>
        </div>

    </div>
    <div class="flex flex-col sm:hidden grid-cols-5 grid-rows-5 bg-[#E6007E] p-[7vw] gap-16">

      <div class="col-span-3 row-span-5  text-white flex flex-col h-auto justify-between">
          <span class="font-bold text-[30px] text-center">{{ $t('home.portfolio.title') }}</span>
      </div>

      <div class="grid col-span-4 row-span-5 col-start-4  grid-cols-9 grid-rows-10 gap-4 h-[20em]">
          <div class="col-span-4 row-span-5 bg-[white] rounded overflow-hidden flex items-center justify-start">
            <img :src="stands[0].itemImageSrc" class="w-full h-full object-cover"  alt="stand">

          </div>
          <div class="col-span-5 row-span-5 col-start-5 bg-[white] rounded overflow-hidden flex items-center justify-start">
            <img :src="stands[1].itemImageSrc" class="w-full h-full object-cover"  alt="stand">

          </div>
          <div class="col-span-5 row-span-5 row-start-6 bg-[white] rounded overflow-hidden flex items-center justify-start">
            <img :src="stands[2].itemImageSrc" class="w-full h-full object-cover"  alt="stand">

          </div>
          <div class="col-span-4 row-span-5 col-start-6 row-start-6 bg-[white] rounded overflow-hidden flex items-center justify-start">
            <img :src="stands[3].itemImageSrc" class="w-full h-full object-cover"  alt="stand">

          </div>
      </div>

      <button id="goToStands" title="Redirect to stands" @click="goToStands()" class="bg-[#663399] w-full text-white h-[60px] rounded-full flex justify-between items-center px-[2em]">
        <span  class="text-[20px] font-normal " style="font-weight:300">{{ $t('home.portfolio.redirect_button') }}</span>
        <img src="/assets/icons/Arrow.svg" alt="Right Arrow">
    </button>

  </div>
</template>