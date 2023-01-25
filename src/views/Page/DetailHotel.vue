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

    <div class="wrapper">
      <div class="wrapper-container">
        <div v-if="loading" class="loading-box">
          <progress-spinner strokeWidth="10" />
        </div>
        <div v-else class="content-container">
          <div class="hotel-detail_box">


            <div class="hotel-detail_header">
              <div class="hotel-favourites">
                <ToggleButton v-model="checked"
                              onLabel=""
                              offLabel=""
                              onIcon="pi pi-bookmark-fill"
                              offIcon="pi pi-bookmark"
                />
              </div>
              <div class="hotel-title">
                <div class="hotel-star">
                  <template v-for="star in hotel.star" :key="star">
                    <i class="pi pi-star-fill" />
                  </template>
                </div>
                <h1>
                  {{ hotel.name }}
                </h1>
                <span>
                  <i class="pi pi-map-marker" />
                  {{ hotel.address }}
                </span>
              </div>
            </div>

            <div class="hotel-detail_content">
              <div class="hotel-detail_image">
                <ui-galleria :image="hotel.image" />
              </div>
              <div class="hotel-detail_reviews">
                <div class="hotel-detail_reviews-header">
                  <div class="reviews-header-title">
                    <span class="small-reviews_name">Отзывы</span>
                    <span class="small-reviews_count">2 отзыва</span>
                  </div>
                  <div class="hotel-rating">
                    <i class="pi pi-bookmark-fill">
                      <PrimeTag :severity="colorRating(hotel.rating)" :value="hotel.rating" />
                    </i>
                  </div>
                </div>
                <div class="hotel-detail_reviews-body">
                  <hotel-review :reviews="hotel.reviews" />
                </div>
                <div class="hotel-detail_reviews-footer">
                  <PrimeButton label="Читать все отзывы" />
                </div>
              </div>
            </div>
            </div>

          <div class="hotel-advantages-box">
            <div class="hotel-box_header">
              <h2>
                Главные удобства:
              </h2>
            </div>
            Безлимитный интернет
            Парковка
            Подходит для детей
            Бар или ресторан
            Кондиционер
            Питание включенно
          </div>

          <div class="hotel-description-box">
            <div class="hotel-box_header">
              <h2>
                Описание отеля
              </h2>
            </div>
            {{ hotel.description }}
          </div>

          <div class="hotel-rooms-box">
            <hotel-rooms :id="id" :rooms="rooms" />
          </div>

        </div>
        <aside class="sidebar-container">
          <div class="sidebar-container-header">
            <router-link to="/">
              Гид по выбору
            </router-link>
          </div>
          <div class="sidebar-container-body">
            <blog-page v-for="post in 4" :key="post" />
          </div>
        </aside>
      </div>
    </div>
  </section>

</template>

<script>

import UiBreadcrumb from "@/components/UI/UiBreadcrumb";
import UiGalleria from "@/components/UI/UiGalleria";
import HotelReview from "@/components/Blocks/HotelReview";
import HotelRooms from "@/components/Blocks/HotelRooms";
import {getHotelDetail, getHotelRoomItems} from "@/api/hotelList";

export default {
  name: "DeteilHotel",
  data(){
    return{
      id: this.$route.params.id,
      hotel: {},
      rooms: null,
      loading: false,
      checked: false
    }
  },
  async mounted(){
    try{
      this.loading = true;
      this.hotel = await getHotelDetail(this.id);
      this.rooms = await getHotelRoomItems(this.id);
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
    UiBreadcrumb, HotelReview, HotelRooms, UiGalleria
  }
}
</script>

<style scoped>

</style>