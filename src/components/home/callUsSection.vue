<script>
import constants from '../../utils/constants'

export default {
    data(){
        return {
            social: constants.social,
            contact: constants.contact,
            mapsUrl: 'https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        }
    },
    mounted() {
        console.log(this.social)
    },
    methods: {
        open(social) {
            let url = "https://www.google.com/"

            if (social == 'instagram') {
                url = this.social.instagram
            }

            if (social == 'linkedin') {
                url = this.social.linkedin
            }

            if (social == 'facebook') {
                url = this.social.facebook
            }

            if (social == 'x') {
                url = this.social.x
            }

            window.open(url, '_blank');
        }
    }
}
</script>

<template>
    <div class="hidden sm:grid grid-cols-8 grid-rows-4 gap-4 p-[7vw] gap-[7vw]">
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
                    <span class="text-[15px] font-bold">{{$t('home.callUs.contact.mail')}}</span>
                    <span class="text-[15px]">{{contact.mail01}}</span>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/location.png" alt="" class="w-[2em]">
                </div>
                <div>
                    <span class="text-[15px] font-bold">{{$t('home.callUs.contact.address')}}</span>
                    <div class=" text-[15px] flex flex-col leading-tight">
                        <span>{{ contact.address01 }} </span>
                        <span>{{ contact.address02 }} </span>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/phone.png" alt="" class="w-[2em]">
                </div>
                <div class="flex flex-col leading-tight">
                    <span class="text-[15px] font-bold">{{$t('home.callUs.contact.phone')}}</span>
                    <span class="text-[15px]">{{contact.phone01}}</span>
                </div>
            </div>
        </div>
        <div class="col-span-3 col-start-1 row-start-4 flex gap-[2em]">
            <button class="icon-container" @click="open('instagram')">
                <img src="/assets/icons/instagram.svg" alt="" class="w-[1em]">
            </button>
            <button class="icon-container" @click="open('linkedin')">
                <img src="/assets/icons/linkedin.svg" alt="" class="w-[1em]">
            </button>
            <button class="icon-container" @click="open('facebook')">
                <img src="/assets/icons/facebook.svg" alt="" class="w-[1em]">
            </button>
            <button class="icon-container" @click="open('x')">
                <img src="/assets/icons/x.svg" alt="" class="w-[1em]">
            </button>
        </div>

        <div class="col-span-5 row-span-4 col-start-4 row-start-1">
            <div class="w-[100%] h-[40em] rounded overflow-hidden bg-[black]">
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
            </div>
        </div>
    </div>
    <div class="grid sm:hidden gap-4 px-[7vw] py-[8vh] gap-[5em]">
        <div class="flex flex-col leading-none text-center">
            <span class="font-bold text-[40px]">{{ $t('home.callUs.title') }}</span>
            <span class="text-[15px]">{{ $t('home.callUs.subtitle') }}</span>
        </div>
        <div class=" flex flex-col px-[3em] gap-[2em]">
            <div class="flex gap-4">
                <div class="border border-[black] rounded  w-[2.5em] h-[2.5em] flex items-center justify-center">
                    <img src="/assets/icons/mail.png" alt="" class="w-[2em]">
                </div>
                <div class="flex flex-col leading-tight ">
                    <span class="text-[15px] font-bold">Email</span>
                    <span class="text-[15px]">{{contact.mail01}}</span>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/location.png" alt="" class="w-[2em]">
                </div>
                <div>
                    <span class="text-[15px] font-bold">Endereço</span>
                    <div class=" text-[15px] flex flex-col leading-tight">
                        <span>{{ contact.address01 }} </span>
                        <span>{{ contact.address02 }} </span>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center">
                    <img src="/assets/icons/phone.png" alt="" class="w-[2em]">
                </div>
                <div class="flex flex-col leading-tight">
                    <span class="text-[15px] font-bold">Telefone / Whatsapp</span>
                    <span class="text-[15px]">{{contact.phone01}}</span>
                </div>
            </div>
        </div>
        <div class="flex gap-[2em] justify-center">
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center" @click="open('instagram')">
                <img src="/assets/icons/instagram.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center" @click="open('linkedin')">
                <img src="/assets/icons/linkedin.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center" @click="open('facebook')">
                <img src="/assets/icons/facebook.svg" alt="" class="w-[1em]">
            </div>
            <div class="border border-[black] rounded w-[2.5em] h-[2.5em]  flex items-center justify-center" @click="open('x')">
                <img src="/assets/icons/x.svg" alt="" class="w-[1em]">
            </div>
        </div>
        <div class="">
            <div class="w-[100%] h-[20em] rounded overflow-hidden bg-[black]">
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=R.%20Schilling,%20576%20-%20Conj%20607%20-%20Vila%20Leopoldina+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon-container {
    position: relative;
    border: 1px solid black;
    border-radius: 0.5em;
    width: 2.5em;
    height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    /* Cor padrão preta */
    overflow: hidden;
    transition: color 0.3s;
}

.icon-container::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: black;
    transition: width 0.4s, height 0.4s, top 0.4s, left 0.4s;
    border-radius: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
}

.icon-container:hover::before {
    width: 300%;
    /* Expande o círculo para cobrir o fundo */
    height: 300%;
    top: 50%;
    left: 50%;
}

.icon-container img {
    position: relative;
    z-index: 1;
    filter: invert(0);
    /* Inicia com a cor invertida (ícone branco) */
    transition: filter 0.4s;
}

.icon-container:hover img {
    filter: invert(1);
    /* Troca para o ícone com cor normal no hover */
}
</style>