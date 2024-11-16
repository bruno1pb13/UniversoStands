<script>
import { useI18n } from "vue-i18n";
import Drawer from 'primevue/drawer';

export default {
    props: ['visible', 'currentPage'],
    emits: {
        hide: Boolean
    },
    data() {
        return {
            drawerState: false,
            logo: "/assets/LogoBranca.webp",
            langModal: false,
            currentFlag: "/assets/flags/pt-br.png",
        }
    },
    setup() {
        const { locale } = useI18n();

        const setLanguage = (lang) => {
            locale.value = lang;
        };

        return { locale, setLanguage };
    },
    beforeDestroy() {
        document.removeEventListener("click");
    },
    methods: {
        redirectTo(page, id) {
            this.$emit('hide')

            if (id) {
                return this.$router.push({ name: page, hash: `#${id}` }).then(() => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                });
            }

            return this.$router.push({ name: page });
        },
        setLanguageHandler(lang) {
            this.langModal = false;
            this.setLanguage(lang);
            this.updateCurrentFlag(lang);
        },
        updateCurrentFlag(lang) {
            this.currentFlag =
                lang === "en_us"
                    ? "/assets/flags/en-us.png"
                    : "/assets/flags/pt-br.png";
        },
    },
    components: {
        Drawer
    },
    computed: {
        pages() {
            return [
                { name: this.$t("nav.pages.home"), key: "HOME" },
                { name: this.$t("nav.pages.fairs"), key: "FEIRAS" },
                { name: this.$t("nav.pages.stands"), key: "STANDS" },
                { name: this.$t("nav.pages.about"), key: "ABOUT" },
            ];
        },
    },
    watch: {
        visible: {
            immediate: true,
            handler(newLocale) {
                this.drawerState = newLocale;
            },
        },
    }
}

</script>


<template>
    <Drawer @hide="$emit('hide')" position="right" v-model:visible="drawerState">
        <template #header>
            <img src="/assets/LogoBranca.webp" alt="Logo" class="w-[60%]" />
        </template>
        <div class="flex flex-col justify-between h-full border-none">
            <section class="relative">
                <button @click="() => (langModal = !langModal)"
                    class="bg-[white] py-[.5em] rounded-2xl w-[100%] flex gap-4 items-center justify-center">
                    <img :src="currentFlag" class="w-10 h-auto" />
                    <span class="font-bold text-[25px] text-[#E6007E]">
                        {{ $t('lang') }}
                    </span>
                </button>
                <div id="langSelection" v-if="langModal"
                    class="absolute w-[17em] bg-[white] top-full left-0 mt-[1em] rounded shadow-2xl flex flex-col p-4">
                    <span class="text-[20px]">{{ $t("nav.lang.title") }}</span>
                    <div id="divider" class="h-[3px] w-[80%] mx-auto bg-[#E6007E] rounded my-4"></div>
                    <data value="" class="flex flex-col">
                        <button @click="setLanguageHandler('en_us')" class="flex gap-4 items-center">
                            <section class="w-10 h-auto">
                                <img src="/assets/flags/en-us.png" alt="" srcset="" />
                            </section>
                            <section>{{ $t("nav.lang.en_us") }}</section>
                        </button>
                        <button @click="setLanguageHandler('pt_br')" class="flex gap-4 items-center">
                            <section class="w-10 h-auto">
                                <img src="/assets/flags/pt-br.png" alt="" srcset="" />
                            </section>
                            <section>{{ $t("nav.lang.pt_br") }}</section>
                        </button>
                    </data>
                </div>
            </section>
            <section>
                <div class="flex flex-col items-start text-[30px] text-[white] gap-8">
                    <button v-for="page in pages" :key="page.key"
                    :class="['menu-mobile', { activeMobile: currentPage == page.key }]" class=" btn  py-2 leading-3"
                    @click="redirectTo(page.key)">
                        {{ page.name }}
                    </button>
                </div>
            </section>
            <section>
                <button @click="redirectTo('ABOUT', 'contact')"
                    class="w-full bg-[#663399] py-[.5em] text-[white] font-bold text-[25px] rounded-2xl">
                    Contato
                </button>
            </section>
        </div>
    </Drawer>
</template>

<style>
.p-drawer{
    background-color: #E6007E !important;
    border: none !important
}

</style>