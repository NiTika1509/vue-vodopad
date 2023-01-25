<template>
  <PrimeCarousel :value="reviews" :circular="true" :numVisible="1" :showIndicators="false">
      <template #item="{data}">
        <div class="small-reviews-item">
          <div class="small-reviews-item_title">
            <span class="small-reviews-item_name">{{ data.name }}</span>
            <PrimeTag severity="success" :value="data.estimation" />
          </div>
          <p class="small-reviews-item_message">
            {{ data.content }}
          </p>
        </div>
      </template>
  </PrimeCarousel>
</template>

<script>
export default {
  name: "HotelReview",
  props:{
    reviews:{
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>