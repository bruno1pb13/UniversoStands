<script>
import constants from '../../utils/constants'
export default {
    data() {
        return {
            contact: constants.contact,
            social: constants.social
        }
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
    <div class="w-full h-auto sm:h-[20em] bg-[var(--purple)]">
        <div class="flex flex-col justify-between h-full pt-[3em] text-white ">
            <div class="flex sm:flex-row gap-8 sm:gap-0 flex-col justify-between  px-[7vw]">
                <div class="flex flex-col gap-4">
                    <img src="/assets/LogoBrancaRosa.png" alt="" class="w-[14em] rounded">
                    <img src="/assets/sindprom.png" alt="" class="w-[10em] bg-[white] rounded">
                </div>
                <div class="flex flex-col">
                    <span>{{ $t('footer.phone') }}</span>
                    <span>{{ contact.phone01 }}</span>
                    <span>{{ contact.phone02 }}</span>
                </div>
                <div class="flex flex-col">
                    <span>{{ $t('footer.mail') }}</span>
                    <span>{{ contact.mail01 }}</span>
                    <span>{{ contact.mail02 }}</span>
                </div>

                <div class="flex flex-col">
                    <span>‎ </span>
                    <ul>
                        <li>
                            <a href="/legal/politicadeprivacidade">
                                {{ $t('docs.privacy_policy') }}
                            </a>
                        </li>
                        <li>
                            <a :href="$t('docs.work_policy_file')" target=”_blank” >
                                {{$t('docs.work_policy')}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <span>{{$t('footer.social')}}</span>
                    <div class="flex w-[6em] sm:w-full gap-4 items-center justify-between">
                        <button @click="open('instagram')">
                            <img src="/assets/icons/instagram.svg" class="w-[1.5em] invert" alt="">
                        </button>
                        <button @click="open('linkedin')">
                            <img src="/assets/icons/linkedin.svg" class="w-[1.5em] invert" alt="">
                        </button>
                        <button @click="open('x')">
                            <img src="/assets/icons/facebook.svg" class="w-[.9em] invert" alt="">
                        </button>
                    </div>
                </div>
            </div>
            <div class=" px-[7vw] pt-[2em] sm:pt-0 text-left sm:text-center">
                {{ contact.address01 }},
                {{ contact.address02 }} 
            </div>
            <div class="pattern w-full h-[8em]"></div>
        </div>
    </div>
</template>