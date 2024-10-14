<template>
    <div class="w-full h-auto sm:h-[20em] bg-[var(--purple)]">
        <div class="flex flex-col justify-between h-full pt-[3em] text-white ">
            <div class="flex sm:flex-row gap-8 sm:gap-0 flex-col justify-between  px-[7vw]"> 
                <div class="flex flex-col gap-4">
                    <img src="/assets/LogoBranca.png" alt="" class="w-[18em]">
                    <img src="/assets/sindprom.png" alt="" class="w-[10em] bg-[white]">
                </div>
                <div class="flex flex-col">
                    <span>{{$t('footer.phone')}}</span>
                    <span>(11) 9 9999-9999</span>
                    <span>(11) 9999-9999</span>
                </div>
                <div class="flex flex-col">
                    <span>{{$t('footer.mail')}}</span>
                    <span>universo@universostands.com</span>
                    <span>universostands@gmail.com</span>
                </div>
                
                <div class="flex flex-col">
                    <span>LGPD</span>
                    <ul>
                        <li>
                            <a href="/legal/politicadeprivacidade">
                                Política de Privacidade
                            </a>
                        </li>
                        <li>Preferências de Cookies</li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <span>{{$t('footer.social')}}</span>
                    <div class="flex w-[6em] sm:w-full gap-4 items-center justify-between">
                        <div>
                            <img src="/assets/icons/instagram.svg" class="w-[1.5em] invert" alt="">
                        </div>
                        <div>
                            <img src="/assets/icons/linkedin.svg" class="w-[1.5em] invert" alt="">
                        </div>
                        <div>
                            <img src="/assets/icons/facebook.svg" class="w-[.9em] invert" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class=" px-[7vw] pt-[2em] sm:pt-0 text-left sm:text-center">
                R. Schilling, 560 - Vila Leopoldina, São Paulo - SP, 05302-001
            </div>
            <div class="pattern w-full h-[8em]"></div>
        </div>
    </div>
</template>