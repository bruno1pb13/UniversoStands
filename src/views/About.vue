<template>
    <section class=" pt-[7em] flex flex-col items-center ">
        <div class="flex items-center px-[7em] ">
            <div class="w-[50%] ">
                <span class="text-[45px] font-light italic" style="font-weight:200"> {{$t('about.title')}}</span>
            </div>
            <div class="w-[50%] ">
                <img src="/assets/lorem/equip.png" alt="">
            </div>
        </div>
        <div class="pattern w-full h-[8em]"></div>
    </section>
    <section class="px-[7em] py-[4em] flex flex-col gap-[4em]">
        <div class="flex flex-col">
            <span class="font-bold text-[30px]">{{$t('about.mission.title')}}</span>
            <span class="text-[30px]">{{$t('about.mission.description')}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold text-[30px]">{{$t('about.vision.title')}}</span>
            <span class="text-[30px]">{{$t('about.vision.description')}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold text-[30px]">{{$t('about.values.title')}}</span>
            <span class="text-[30px]">{{$t('about.values.description')}}</span>
        </div>
    </section>
    <section id="contact">
        <div class="grid grid-cols-8 grid-rows-4 p-[7vw]">
            <div class="col-span-4 row-span-1 ">
                <div class="flex flex-col leading-none gap-8">
                    <span class="font-bold text-[30px]">{{$t('about.contact.title')}}</span>
                    <span class="text-[15px]">{{$t('about.contact.description')}}</span>
                </div>
            </div>
            <div class="col-span-4 row-span-3 col-start-1 row-start-2 flex flex-col gap-[2em] ">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.administrative')}}</span>
                        <span class="text-[15px]">Eloilza Goulart </span>
                        <span class="text-[15px]"><a href="mailto:adm@usbrasil.com">adm@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_manager')}}</span>
                        <span class="text-[15px]">Eloilza Goulart </span>
                        <span class="text-[15px]"><a href="mailto:eloilza@usbrasil.com">eloilza@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_team')}}</span>
                        <span class="text-[15px]">Barbara Nathielly</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Lucas Gonçalves </span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Tamara Diniz</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Thiago Padilha</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Patrícia Fritz</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                   
                </div>
                <div class="flex gap-4">
                    <div class="flex flex-col leading-tight">
                        <span class="text-[15px] font-bold">{{$t('about.contact.phone')}}</span>
                        <span class="text-[15px]">+55 31 99999-9999</span>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div>
                        <span class="text-[15px] font-bold">{{$t('about.contact.address')}}</span>
                        <div class=" text-[15px] flex flex-col leading-tight">
                            <span>Schilling, 576, Conj 607, </span>
                            <span>Vila Leopoldina São Paulo/SP </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-4 row-span-4 col-start-5 row-start-1 ">
                <div class="w-[100%] h-[50em] rounded overflow-hidden bg-[black]">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
</template>