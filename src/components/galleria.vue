<script>
import Galleria from 'primevue/galleria';

export default{
    props: ['index', 'images', 'galerryVisible'],
    data(){
        return{
            activeIndex : 0,
            visibility: false
        }
    },
    mounted(){
        this.activeIndex = this.index;
        this.visibility = this.galerryVisible

        setTimeout(() => {
            document.addEventListener('click', this.handleClickOutside);
        }, 0);    },
    beforeUnmount(){
        document.removeEventListener('click', this.handleClickOutside);
    },
    components: {
        Galleria
    },
    methods: {
        handleClickOutside(event) {
            const galleriaElement = this.$el.querySelector('.p-galleria');
            if (galleriaElement && !galleriaElement.contains(event.target)) {
                this.$emit('closeX');
            }
        }
    },
    watch:{
        index(newValue){
            this.activeIndex = newValue
        },
        galerryVisible(newVal){
            this.galerryVisible = newVal
            if(this.galerryVisible == false){
                this.$emit('closeX')
            }
        }
    }
}
</script>

<template>
    {{galerryVisible}}
    <Galleria v-model:visible="visibility" :value="images" :numVisible="4" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
        <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
        </template>
        <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
        </template>
    </Galleria>
</template>

<style>
.p-galleria-thumbnails-content	{
    padding: 2em 1em
}
</style>