<script>
import { useI18n } from "vue-i18n";
import drawer from "./drawer.vue";
export default {
    data() {
        return {
            currentPage: undefined,
            logo: "/assets/LogoBranca.png",
            langModal: false,
            currentFlag: "/assets/flags/pt-br.png",
            drawerState: false,
        };
    },
    setup() {
        const { locale } = useI18n();

        const setLanguage = (lang) => {
            locale.value = lang;
        };

        return { setLanguage };
    },
    mounted() {
        this.currentPage = this.$route.name;

        this.$nextTick(() => {
            this.updateIndicator();
        });

        this.$router.afterEach(() => {
            this.currentPage = this.$route.name;
            this.$nextTick(() => {
                this.updateIndicator();
            });
        });

        window.addEventListener("resize", this.handleResize);
    },
    beforeMount() {
        this.updateIndicator();
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
    updated() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.updateIndicator();
                if (["FEIRAS", "ABOUT"].includes(this.currentPage)) {
                    this.logo = "/assets/LogoRosa.png";
                } else {
                    this.logo = "/assets/LogoBranca.png";
                }
            }, 100);
        });
    },
    methods: {
        redirectTo(page, id) {
            this.drawerState = false
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
        handleResize() {
            // Função específica para o evento de resize
            this.$nextTick(() => {
                this.updateIndicator("resize");
            });
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
    components: {
        drawer
    }
};
</script>

<template>
    <drawer :currentPage="currentPage" :visible="drawerState" @hide="() => this.drawerState = false" />
    <nav
        class=" max-w-[100vw] z-[100] absolute top-8 left-1/2 transform -translate-x-1/2 w-[85vw] flex flex-wrap items-center justify-between">

        <div class="flex items-center justify-start w-[50%] sm:w-auto">
            <img :src="logo" alt="Logo" class="w-[50%] sm:w-40 h-auto" />
        </div>

        <div class="hidden lg:flex gap-4 mt-4 sm:mt-0">
            <div class="flex pill rounded-full relative">
                <button @click="() => (langModal = !langModal)" class="flex btn items-center justify-center">
                    <img :src="currentFlag" class="w-10 h-auto" />
                </button>
                <div id="langSelection" v-if="langModal"
                    class="absolute w-[17em] bg-[white] left-0 mt-[5em] rounded shadow-2xl flex flex-col p-4" style="z-index: 10">
                    <span class="text-[20px]">{{ $t("nav.lang.title") }}</span>
                    <div id="divider" class="h-[3px] w-[80%] mx-auto bg-[#E6007E] rounded my-4"></div>
                    <div class="flex flex-col">
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
                    </div>
                </div>
            </div>
            <div class="pill rounded-full px-4">
                <button class="btn" @click="redirectTo('ABOUT', 'contact')">
                    {{$t('nav.contact')}}
                </button>
            </div>
        </div>

        <div class="block lg:hidden" @click="() => this.drawerState = true">
            <img src="/assets/icons/menu.svg">
        </div>
    </nav>

    <div v-if="currentPage" id="pages"
        class="hidden sm:flex absolute left-1/2 top-8 transform -translate-x-1/2  pill rounded-full overflow-hidden w-[30em] z-[115]">
        <div class="bg-indicator"></div>
        <button v-for="page in pages" :key="page.key" :class="['menu-item', { active: currentPage == page.key }]"
            class="hover:bg-white btn rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
            @click="redirectTo(page.key)">
            {{ page.name }}
        </button>
    </div>

</template>

<style>
.pill {
    background-color: var(--pink);
}

.pill .btn {
    width: 100%;
    height: 60px;
    padding: 1em 2em;
    color: white;
}


.menu-item {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
}

.menu-item:hover {
    background-color: transparent;
}

.active {
    color: black !important;
}

.activeMobile {
    font-weight: bold;
    border-bottom: 1px solid white;
}

.bg-indicator {
    position: absolute;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 60px;
    transition: all 0.3s ease-in-out;
    z-index: 0;
}

.pill .btn:hover {
    background-color: transparent;
}
</style>
