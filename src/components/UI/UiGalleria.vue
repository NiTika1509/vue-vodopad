<template>
  <div class="hotel-detail_galleria" :style="{'margin-left': `${margin}px` }">
    <div class="galleria-image-container" v-for="image_item of image" :key="image_item">
      <img :src="image_item" />
    </div>
    <div class="galleria-navigation">
      <PrimeButton :class="{'disable': disableLeft}" icon="pi pi-angle-left" @click="navigateBack()" />
      <PrimeButton :class="{'disable': disableRight}" icon="pi pi-angle-right" @click="navigateNext()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UiGalleria",
  data(){
    return{
      margin: 0,
      max_margin: 0,
      step: 418,
      disableLeft: true,
      disableRight: false,
      fullWidth: 0
    }
  },
  props: {
    image: {
      type: Array,
      required: true,
      default: ()=> []
    }
  },
  watch:{
    margin(val){
      if (val < 0){
        this.disableLeft = false;
      }else{
        this.margin = 0
        this.disableLeft = true;
        this.disableRight = false;
      }


      if (val < -this.max_margin){
        this.disableRight = true
      }else if ((val + 418) === -this.max_margin){
        this.disableRight = false
      }

    }
  },
   mounted(){
     const image_count = this.image.length;
     this.fullWidth = Math.ceil(( image_count - 1) / 2) * 160 + 400;
     this.max_margin = this.fullWidth - 718
  },
  methods: {
    navigateBack() {
      if(this.margin < 0){
        this.margin = this.margin + this.step;
      }
    },
    navigateNext() {
      this.margin = this.margin - this.step
      console.log("Маргин: " + this.margin)
      console.log("Максимальный маргин: " + -this.max_margin)
      console.log("Ширина блока: " + this.fullWidth)
      console.log("Ширина - Маргин: " + (this.fullWidth + this.margin))
    }
  }
}
</script>

<style lang="sass">
  .hotel-detail_galleria
    display: flex
    height: 100%
    flex-wrap: wrap
    flex-direction: column
    position: relative
    transition-duration: .5s
    .galleria-image-container
      height: 160px
      width: 160px
      padding: 2px
      &:first-child
        min-height: 322px
        width: 400px
        padding: 2px 0 2px 2px
      img
        cursor: pointer
        display: block
        height: 100%
        left: 0
        object-fit: cover
        top: 0
        width: 100%
    .galleria-navigation
      position: absolute
      bottom: 20px
      right: 20px
      .p-button
        box-shadow: none
        &.disable
          background: #f4f4f4
          border: none
          opacity: 0.8
          color: #495057
          cursor: default
        &:last-child
        margin-left: 15px
</style>