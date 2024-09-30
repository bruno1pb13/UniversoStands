<script>
import { useI18n } from 'vue-i18n'

export default {
    data() {
        return {
            currentPage: undefined,
            pages: [
                { name: 'Home', key: 'HOME' },
                { name: 'Feiras', key: 'FEIRAS' },
                { name: 'Stands', key: 'STANDS' },
                { name: 'Sobre', key: 'ABOUT' }
            ],
            logo: "/assets/LogoBranca.png"
        }
    },
    setup() {
        const { locale } = useI18n()

        const setLanguage = (lang) => {
            locale.value = lang
        }

        return { setLanguage }
    },
    mounted() {

        this.currentPage = this.$route.name

        if (["FEIRAS"].includes(this.currentPage)) {
            this.logo = "/assets/LogoRosa.png"
        }

        this.updateIndicator()

        this.$router.afterEach(() => {
            this.currentPage = this.$route.name
            this.updateIndicator();
        });

        window.addEventListener('resize', this.handleResize);

    },
    beforeMount() {
        this.updateIndicator()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    updated() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.updateIndicator();
            }, 100)
        });
    },
    methods: {
        redirectTo(page) {
            this.$router.push({ name: page });
        },
        updateIndicator() {
            const activeButton = document.querySelector('.menu-item.active');
            const indicator = document.querySelector('.bg-indicator');

            if (activeButton && indicator) {
                // Ajusta a posição e largura do indicador
                indicator.style.width = `${activeButton.offsetWidth}px`;
                indicator.style.left = `${activeButton.offsetLeft}px`;
            }

        },
        handleResize() {
            // Função específica para o evento de resize
            this.updateIndicator("resize");
        }
    }
}
</script>

<template>
    <nav
        class="z-100 absolute top-8 left-1/2 transform -translate-x-1/2 w-[85vw] flex flex-wrap items-center justify-between">
        <div class="flex items-center justify-start w-[50%] sm:w-auto">
            <img :src="logo" alt="Logo" class="w-[50%] sm:w-40 h-auto">
        </div>

        <div v-if="currentPage" id="pages" class="flex pill rounded-full overflow-hidden relative mt-4 sm:mt-0">
            <div class="bg-indicator"></div>
            <button v-for="page in pages" :key="page.key" :class="['menu-item', { 'active': currentPage == page.key }]"
                class="hover:bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
                @click="redirectTo(page.key)">
                {{ page.name }}
            </button>
        </div>

        <div class="flex gap-4 mt-4 sm:mt-0">
            <div class="flex pill rounded-full h-full relative">
                <button class="flex items-center justify-center">
                    <img src="/assets/flags/pt-br.png" class="w-10 h-auto">
                </button>
                <div id="modal"
                    class="absolute h-[8em] w-[17em] bg-[white]  top-full left-0 mt-[1em] rounded shadow-2xl">
                    <span>{{ $t('nav.lang') }}</span>
                    <button @click="setLanguage('pt_br')" class="text-[black]">pt</button>
                    <button @click="setLanguage('en_us')">en</button>
                </div>
            </div>
            <div class="pill rounded-full px-4">
                <button>Contato</button>
            </div>
        </div>
    </nav>

</template>

<style scoped>
.pill {
    background-color: var(--pink);
    position: relative;
}

.pill button {
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

.bg-indicator {
    position: absolute;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 60px;
    transition: all 0.3s ease-in-out;
    z-index: 0;
}

.pill button:hover {
    background-color: transparent;
}
</style>
