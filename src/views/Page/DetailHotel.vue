<template>

  <section>
    <div class="wrapper">
      <div class="wrapper-container">
        <div class="breadcrumb-container">
          <ui-breadcrumb />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div v-if="loading">Загрузка... </div>
    <div v-else class="wrapper">
      <div class="wrapper-container">
        <div class="content-container">
          <div class="hotel-item">
            <div class="hotel-item_image">
              <PrimeGalleria :value="hotel.image" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px" :circular="true" :showItemNavigators="true" :showThumbnails="false">
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
                  <router-link :to="`hotel/${hotel.id}`">
                    {{ hotel.name }}
                  </router-link>
                  <span>
                    {{ hotel.adress }}
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
                <router-link :to="`hotel/${hotel.id}`">
                  <PrimeButton label="Подобрать номер" />
                </router-link>
              </div>
            </div>
          </div>
          {{ rooms }}
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import UiBreadcrumb from "@/components/UI/UiBreadcrumb";
import {getHotelDetail, getHotelRoomItems} from "@/api/hotelList";

export default {
  name: "DeteilHotel",
  data(){
    return{
      id: this.$route.params.id,
      hotel: {},
      rooms: null,
      loading: false,
    }
  },
  async mounted(){
    try{
      this.loading = true;
      this.hotel = await getHotelDetail(this.id);
      this.rooms = await getHotelRoomItems(this.id);
      console.log(this.hotel)
    }catch (e){
      console.log(e)
      throw e;
    } finally {
      this.loading = false;
    }
  },
  methods:{
    colorRating(rating){
      if(rating > 7 ) return "success";
      else if(rating < 4)  return "danger";
      else return "warning";
    }
  },
  components:{
    UiBreadcrumb
  }
}
</script>

<style scoped>

</style>