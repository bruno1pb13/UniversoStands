<script>
import { useI18n } from "vue-i18n";

export default {
    data() {
        return {
            currentPage: undefined,
            logo: "/assets/LogoBranca.png",
            langModal: false,
            currentFlag: "/assets/flags/pt-br.png",
        };
    },
    setup() {
        const { locale } = useI18n();

        const setLanguage = (lang) => {
            locale.value = lang;
        };

        return { locale, setLanguage };
    },
    mounted() {
        this.currentPage = this.$route.name;

        setTimeout(()=>{
        document.addEventListener('click', (e) => {
                if (e.target.id !== "drawer" && !this.$el.contains(e.target)) {
                    this.$emit('close')
                }
            });
        }, 100)

        this.updateCurrentFlag(this.locale);

    },
    beforeDestroy() {
        document.removeEventListener("click");
    },
    methods: {
        handleOutsideClick(event) {
            console.log("?")
            const drawer = this.$refs.drawer;
            if (drawer && !drawer.contains(event.target)) {
                this.drawerState = false;
            }
        },
        redirectTo(page, id) {
            this.$emit('close')

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
        updateIndicator() {
            const activeButton = document.querySelector(".menu-item.active");
            const indicator = document.querySelector(".bg-indicator");

            if (activeButton && indicator) {
                // Ajusta a posição e largura do indicador
                indicator.style.width = `${activeButton.offsetWidth}px`;
                indicator.style.left = `${activeButton.offsetLeft}px`;
                }
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
        locale: {
            immediate: true,
            handler(newLocale) {
                this.updateCurrentFlag(newLocale);
            },
        },
    },
};
</script>


<template>
    <div id="drawer"
        class="z-[200] fixed bg-[#E6007E] h-[100vh] w-[70vw] right-0 top-0 py-[4em] px-[2em] gap-4 flex flex-col justify-between pb-[15em]">
        <section>
            <img src="/assets/LogoBranca.png" alt="" class="w-[80%]" />
        </section>
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
</template>