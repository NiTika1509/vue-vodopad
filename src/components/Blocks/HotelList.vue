<template>
  <div class="hotel-item">
    <div class="hotel-item_image">
      <PrimeGalleria
          :value="hotel.image"
          :numVisible="5"
          containerStyle="max-width: 640px"
          :circular="true"
          :showItemNavigators="true"
          :showThumbnails="false">
        <template #item="data">
          <img :src="data.item" style="width: 100%; display: block;" />
        </template>
      </PrimeGalleria>
    </div>
    <div class="hotel-item_content">
      <div class="content-header content-group">
        <div class="hotel-title">
          <div class="hotel-star">
            <template v-for="star in hotel.star" :key="star">
              <i class="pi pi-star-fill" ></i>
            </template>
          </div>
          <router-link :to="`hotels/${hotel.id}`">
            {{ hotel.name }}
          </router-link>
          <span>
            {{ hotel.address }}
          </span>
        </div>
        <div class="hotel-adventure">
          <div class="hotel-rating">
            <PrimeTag :severity="colorRating(hotel.rating)" :value="hotel.rating" />
          </div>
        </div>
      </div>
      <div class="content-price content-group">
        <div class="price-title">
          Цена за номер<br> в отеле
        </div>
        <div>
                  <span class="price">
                    от 4000₽
                  </span>
          <span class="price-to">
                    за ночь
                  </span>
        </div>
      </div>
      <div class="content-footer content-group">
        <PrimeButton label="Подобрать номер" @click="navigate(hotel.id)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HotelsList",
  props:{
    hotel:{
      type: Object,
      required: true
    }
  },
  methods:{
    colorRating(rating){
      if(rating > 7 ) return "success";
      else if(rating < 4)  return "danger";
      else return "warning";
    },
    navigate(hotel_id) {
      this.$router.push({name: "DetailHotel", params: {id: hotel_id}});
    },
  }
}
</script>

<style scoped>

</style>