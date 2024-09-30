<template>
    <div class="w-full h-[20em] bg-[var(--purple)]">
        <div class="flex flex-col justify-between h-full pt-[3em] text-white ">
            <div class="flex justify-between  px-[7vw]"> 
                <div>
                    <img src="/assets/LogoBranca.png" alt="" class="w-[18em]">
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
                        <li>Política de Privacidade</li>
                        <li>Política de Segurança da informação</li>
                        <li>Preferências de Cookies</li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <span>{{$t('footer.social')}}</span>
                    <div class="flex gap-4 items-center justify-between">
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
            <div class="text-center">
                R. Schilling, 560 - Vila Leopoldina, São Paulo - SP, 05302-001
            </div>
            <div class="pattern w-full h-[8em]"></div>
        </div>
    </div>
</template>