<script>

export default {

}
</script>

<template>
    <div class="grid grid-cols-8 grid-rows-4 gap-4 p-[7vw] gap-[7vw]">
        <div class="col-span-3">
            <div class="flex flex-col leading-none">
                <span class="font-bold text-[40px]">{{ $t('home.callUs.title') }}</span>
                <span class="text-[15px]">{{ $t('home.callUs.subtitle') }}</span>
            </div>
        </div>
        <div class="col-span-3 row-span-2 col-start-1 row-start-2 flex flex-col gap-[2em]">
            <div class="flex gap-4">
                <div class="border border-[black] rounded  w-[2.5em] h-[2.5em] flex items-center justify-center">
                    <img src="/assets/icons/mail.png" alt="" class="w-[2em]">
                </div>
                <div class="flex flex-col leading-tight ">
                    <span class="text-[15px] font-bold">Email</span>
                    <span class="text-[15px]">Contato@us.brasil</span>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/location.png" alt="" class="w-[2em]">
                </div>
                <div>
                    <span class="text-[15px] font-bold">Endereço</span>
                    <div class=" text-[15px] flex flex-col leading-tight">
                        <span>Schilling, 576, Conj 607, </span>
                        <span>Vila Leopoldina São Paulo/SP </span>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/phone.png" alt="" class="w-[2em]">
                </div>
                <div class="flex flex-col leading-tight">
                    <span class="text-[15px] font-bold">Telefone / Whatsapp</span>
                    <span class="text-[15px]">+55 31 99999-9999</span>
                </div>
            </div>
        </div>
        <div class="col-span-3 col-start-1 row-start-4 flex gap-[2em]">
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                <img src="/assets/icons/instagram.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                <img src="/assets/icons/linkedin.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                <img src="/assets/icons/facebook.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                <img src="/assets/icons/x.svg" alt="" class="w-[1em]">
            </div>
        </div>
        <div class="col-span-5 row-span-4 col-start-4 row-start-1">
            <div class="w-[100%] h-[40em] rounded overflow-hidden bg-[black]">
                <iframe width="100%" height="100%" frameborder="0" scrolling="no"
                    marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    </div>
</template>