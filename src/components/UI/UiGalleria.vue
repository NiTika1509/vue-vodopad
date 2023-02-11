<template>
  <div class="hotel-detail-galleria">
    <div class="hotel-detail-galleria-items" :style="{'transform': `translateX(-${margin}px)` }">
      <div class="hotel-detail-galleria-item" v-for="image_item of image" :key="image_item">
        <PrimeImage :preview="true" :src="image_item" />
      </div>
    </div>
    <div class="hotel-detail-galleria-navigation">
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
      step: 718,
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



      if (val > 0){
        this.disableLeft = false
      }
      if (val <= 0){
        this.margin = 0
        this.disableLeft = true;
        this.disableRight = false;
      }
      if (val < this.max_margin){
        this.disableRight = false
      }
      if (val > this.max_margin){
        this.margin = this.max_margin
        this.disableRight = true
      }

    }
  },
   mounted(){
     const image_count = this.image.length;
     this.fullWidth = Math.ceil(( image_count - 1) / 2) * 160 + 400;
     this.max_margin = this.fullWidth - 718;
  },
  methods: {
    navigateBack() {
      if(this.margin > 0){
        this.margin = this.margin - this.step;
      }
    },
    navigateNext() {
      this.margin = this.margin + this.step
    }
  }
}
</script>

<style lang="sass">
.hotel-detail-galleria
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  .hotel-detail-galleria-items
    display: flex
    height: 100%
    flex-direction: column
    position: relative
    flex-wrap: wrap
    transition-duration: .5s
    .hotel-detail-galleria-item
      height: 160px
      width: 160px
      padding: 2px
      display: inline-block
      &:first-child
        min-height: 322px
        width: 400px
        padding: 2px 0 2px 2px
      .p-image
        width: 100%
        height: 100%
        img
          cursor: pointer
          display: block
          height: 100%
          left: 0
          object-fit: cover
          top: 0
          width: 100%
.hotel-detail-galleria-navigation
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