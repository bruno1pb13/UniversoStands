
<script>
import constants from '../utils/constants'
export default {
    data() {
        return {
            contact: constants.contact
        }
    }
}
</script>

<template>
    <section class=" pt-[7em] flex flex-col items-center ">
        <div class="flex flex-col sm:flex-row items-center justify-between px-[2em] sm:px-[7em] w-full">
            <div class="w-full ">
                <span class="text-[30px] sm:text-[45px] font-light italic" style="font-weight:200"> {{$t('about.title')}}</span>
            </div>
            <div class="w-full  ">
                <img src="/assets/lorem/equip.png" alt="">
            </div>
        </div>
        <div class="pattern w-full h-[8em]"></div>
    </section>
    <section class="px-[2em] sm:px-[7em] pt-[4em] flex flex-col gap-[4em]">
        <div class="flex flex-col">
            <span class="font-bold text-[25px] sm:text-[25px]">{{$t('about.mission.title')}}</span>
            <span class="text-[15px] sm:text-[20px]">{{$t('about.mission.description')}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold text-[25px] sm:text-[25px]">{{$t('about.vision.title')}}</span>
            <span class="text-[15px] sm:text-[20px]">{{$t('about.vision.description')}}</span>
        </div>
        <div class="flex flex-col">
            <span class="font-bold text-[25px] sm:text-[25px]">{{$t('about.values.title')}}</span>
            <ul class="flex flex-col gap-2">
                <li>
                    <span class="font-bold">{{$t('about.values.safety.title')}}</span>
                    <span>{{$t('about.values.safety.description')}}</span>
                </li>
                <li>
                    <span class="font-bold">{{$t('about.values.ethics.title')}}</span>
                    <span>{{$t('about.values.ethics.description')}}</span>
                </li>
                <li>
                    <span class="font-bold">{{$t('about.values.recognition.title')}}</span>
                    <span>{{$t('about.values.recognition.description')}}</span>
                </li>
                <li>
                    <span class="font-bold">{{$t('about.values.responsability.title')}}</span>
                    <span>{{$t('about.values.responsability.description')}}</span>
                </li>
            </ul>
        </div>
    </section>
    <section class="hidden sm:block" id="contact">
        <div class="grid grid-cols-8 grid-rows-4 py-[7vw] px-[7em]">
            <div class="col-span-7 row-span-1 ">
                <div class="flex flex-col gap-4">
                    <span class="font-bold text-[20px] sm:text-[30px]">{{$t('about.contact.title')}}</span>
                    <span class="text-[13px] sm:text-[15px]">{{$t('about.contact.description')}}</span>
                </div>
            </div>
            <div class=" col-span-4 row-span-3 col-start-1 row-start-2 flex flex-col gap-[2em] ">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.directory')}}</span>
                        <span class="text-[15px]">Eloilza Goulart </span>
                        <span class="text-[15px]"><a href="mailto:eloilza.goulart@us-brasil.com">eloilza.goulart@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.management')}}</span>
                        <span class="text-[15px]">Greici Goulart </span>
                        <span class="text-[15px]"><a href="mailto:greici.goulart@us-brasil.com">greici.goulart@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.administrative')}}</span>
                        <span class="text-[15px]">Tamara Diniz</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_manager')}}</span>
                        <span class="text-[15px]">Thiago Padilha </span>
                        <span class="text-[15px]"><a href="mailto:thiago.padilha@us-brasil.com">thiago.padilha@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_team')}}</span>
                        <span class="text-[15px]">Barbara Nathielly</span>
                        <span class="text-[15px]"><a href="mailto:barbara@us-brasil.com">barbara@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Lucas Gonçalves </span>
                        <span class="text-[15px]"><a href="mailto:lucas@us-brasil.com">lucas@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Patrícia Fritz</span>
                        <span class="text-[15px]"><a href="mailto:patricia@us-brasil.com">patricia@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Regiane Santos</span>
                        <span class="text-[15px]"><a href="mailto:regiane@us-brasil.com">regiane@us-brasil.com</a></span>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="flex flex-col leading-tight">
                        <span class="text-[15px] font-bold">{{$t('about.contact.phone')}}</span>
                        <a :href="'tel:'+contact.phone01raw" class="text-[15px]">{{ contact.phone01 }}</a>
                        <a :href="'tel:'+contact.phone02raw" class="text-[15px]">{{ contact.phone02 }}</a>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div>
                        <span class="text-[15px] font-bold">{{$t('about.contact.address')}}</span>
                        <div class=" text-[15px] flex flex-col leading-tight">
                            <span>{{ contact.address01 }}</span>
                            <span>{{ contact.address02 }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" col-span-4 row-span-3 col-start-5 row-start-2 ">
                <div class="w-[100%] h-[35em] rounded overflow-hidden bg-[black]">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
    <section class="sm:hidden block" id="contact">
        <div class="p-[7vw]">
            <div class="col-span-7 row-span-1 ">
                <div class="flex flex-col gap-4">
                    <span class="font-bold text-[30px]">{{$t('about.contact.title')}}</span>
                    <span class="text-[15px]">{{$t('about.contact.description')}}</span>
                </div>
            </div>
            <div class="  flex flex-col gap-[2em] pt-4">
                <div class="flex flex-col gap-4">
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.directory')}}</span>
                        <span class="text-[15px]">Eloilza Goulart </span>
                        <span class="text-[15px]"><a href="mailto:eloilza.goulart@us-brasil.com">eloilza.goulart@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.management')}}</span>
                        <span class="text-[15px]">Greici Goulart </span>
                        <span class="text-[15px]"><a href="mailto:greici.goulart@us-brasil.com">greici.goulart@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.administrative')}}</span>
                        <span class="text-[15px]">Tamara Diniz</span>
                        <span class="text-[15px]"><a href="mailto:comercial@usbrasil.com">comercial@usbrasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_manager')}}</span>
                        <span class="text-[15px]">Thiago Padilha </span>
                        <span class="text-[15px]"><a href="mailto:thiago.padilha@us-brasil.com">thiago.padilha@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px] font-bold">{{$t('about.contact.sales_team')}}</span>
                        <span class="text-[15px]">Barbara Nathielly</span>
                        <span class="text-[15px]"><a href="mailto:barbara@us-brasil.com">barbara@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Lucas Gonçalves </span>
                        <span class="text-[15px]"><a href="mailto:lucas@us-brasil.com">lucas@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Patrícia Fritz</span>
                        <span class="text-[15px]"><a href="mailto:patricia@us-brasil.com">patricia@us-brasil.com</a></span>
                    </div>
                    <div class="flex flex-col leading-tight ">
                        <span class="text-[15px]">Regiane Santos</span>
                        <span class="text-[15px]"><a href="mailto:regiane@us-brasil.com">regiane@us-brasil.com</a></span>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="flex flex-col leading-tight">
                        <span class="text-[15px] font-bold">{{$t('about.contact.phone')}}</span>
                        <a :href="'tel:'+contact.phone01raw" class="text-[15px]">{{ contact.phone01 }}</a>
                        <a :href="'tel:'+contact.phone02raw" class="text-[15px]">{{ contact.phone02 }}</a>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div>
                        <span class="text-[15px] font-bold">{{$t('about.contact.address')}}</span>
                        <div class=" text-[15px] flex flex-col leading-tight">
                            <span>{{ contact.address01 }}</span>
                            <span>{{ contact.address02 }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" pt-[2em]">
                <div class="w-[100%] h-[20em]  sm:h-[35em] rounded overflow-hidden bg-[black]">
                    <iframe width="100%" height="100%" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
        </div>
    </section>
</template>