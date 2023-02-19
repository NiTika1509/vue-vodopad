<template>
  <section>
    <Transition>
      <div class="wrapper">
        <div class="wrapper-container">
          <div v-if="loading" class="loading-box">
            <progress-spinner strokeWidth="10" />
          </div>
          <div v-else class="content-container">
            <div class="hotel-detail_box">


              <div class="hotel-detail_header">
                <div v-if="user" class="hotel-favourites">
                  <ToggleButton @click="changeFavorite" v-model="favourites"
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
                  <span class="hotel-title-address">
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

            <div class="hotel-content-box hotel-detail-tags">

              <div class="hotel-detail-tags_box">
                <div class="hotel-detail-tags-title">
                    Главные удобства отеля
                </div>
                <div class="hotel-detail-tags-items">
                  <div class="hotel-detail-tags-item" v-for="tag in hotel.tags" :key="tag">
                      <img :src="tag.icon" alt=""/>{{ tag.text }}
                  </div>
                  <div class="hotel-detail-tags-item_more">

                    Какие есть ещё удобства?
                  </div>
                </div>
              </div>
              <div class="hotel-detail-tags_box">

              </div>
            </div>



            <div class="hotel-content-box">
              <hotel-rooms :id="id"/>
            </div>

            <div class="hotel-content-box">
              <div :class="{'desc-collapse' : collapse, 'flex': true}">
                <div class="hotel-description_box">
                  <div class="hotel-box_header">
                    <h2>
                      <img src="https://st.worldota.net/master/65500b6-b604f0d/img/zen/roomspage/amenity/inrooms.svg" alt="">Расположение
                    </h2>
                  </div>
                  <div class="hotel-description_body">
                    <p class="hotel-description_body-text">
                      {{ hotel.place }}
                    </p>
                  </div>
                  <div class="hotel-box_header">
                    <h2>
                      <img src="https://st.worldota.net/master/65500b6-b604f0d/img/zen/roomspage/amenity/inrooms.svg" alt="">Описание отеля
                    </h2>
                  </div>
                  <div class="hotel-description_body">
                    <template v-for="text of hotel.description?.split('|')" :key="text">
                      <p class="hotel-description_body-text">
                        {{ text }}
                      </p>
                    </template>
                  </div>
                </div>
                <div class="hotel-about-info">
                  <div class="hotel-about-info-title">
                    Факты об отеле
                  </div>
                  <div class="hotel-about-info-items">
                    <div class="hotel-about-info-item">
                      <div class="hotel-about-info-item-title">
                        Тип розетки
                      </div>
                      <div class="hotel-about-info-item-description">
                        <div class="hotel-about-info-item-socket-name">Европейская <i class="socket-tip pi pi-info" v-tooltip.top="'Европа говно'" /></div>
                        <div class="hotel-about-info-item-socket-value">220В/50Гц</div>
                      </div>
                      <div class="hotel-about-info-item-description">
                        <div class="hotel-about-info-item-socket-name">Европейская <i class="socket-tip pi pi-info" v-tooltip.top="'Европа говно'" /></div>
                        <div class="hotel-about-info-item-socket-grounding">(с заземлением)</div>
                        <div class="hotel-about-info-item-socket-value">220В/50Гц</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ToggleButton class="desc-toggle" v-model="collapse" offLabel="Свернуть описание" onLabel="Развернуть описание" offIcon="pi pi-chevron-up" onIcon="pi pi-chevron-down" />
            </div>



          </div>
          <aside class="sidebar-container">
            <div class="sidebar-container-header">
              <router-link to="/blog">
                Блог путешествинника
              </router-link>
            </div>
            <div class="sidebar-container-body">
              <blog-sidebar :posts="blog_post" />
            </div>
          </aside>
        </div>
      </div>
      </Transition>
  </section>

</template>

<script>
import UiGalleria from "@/components/UI/UiGalleria";
import HotelReview from "@/components/Blocks/HotelReview";
import HotelRooms from "@/components/Blocks/HotelRooms";
import BlogSidebar from "@/components/Blocks/BlogSidebar";

import { getHotelDetail } from "@/api/hotels";
// import { userChange } from "@/api/auth";
import { mapGetters } from "vuex";
import { tagsList } from "@/data/tagsList"
import { getPostToCount } from "@/api/blog";

export default {
  name: "DetailHotel",
  data(){
    return{
      id: this.$route.params.id,
      hotel: {},
      tags: tagsList,
      blog_post: [],
      rooms: null,
      loading: false,
      collapse: true,
      favourites: false
    }
  },
  async mounted(){
    try{
      this.loading = true;
      this.blog_post = await getPostToCount(3);
      this.hotel = await getHotelDetail(this.id);
      this.$route.params.name = this.hotel.name
      // this.isFavourites();
    }catch (e){
      console.log(e)
      throw e;
    } finally {
      this.loading = false;
      this.getTags(this.hotel.tags)
    }
  },
  computed: {
    ...mapGetters({ user: "getUserData", token: "token" }),

  },
  methods:{

    colorRating(rating){
      if(rating > 7 ) return "success";
      else if(rating < 4)  return "danger";
      else return "warning";
    },
    toggleDescription(){
      this.collapse = !this.collapse;
    },
    getTags(tagsArray){

      this.hotel.tags = tagsArray.map(tagName => this.tags[`${tagName}`])

    }
    // async changeFavorite(){
    //   try {
    //     if (this.favourites){
    //       await userChange('favourites_hotels', this.token, [
    //         this.hotel
    //       ])
    //       this.favourites = true;
    //     }else {
    //       this.favourites = false;
    //     }
    //   }catch (e) {
    //     console.log(e)
    //   }
    //
    // }
    // isFavourites(){
    //   if (this.user.favourites_hotels.length !== 0){
    //     const findThisHotel = this.user.favourites_hotels.find( hotel => hotel.id === this.id);
    //     this.favourites = !!findThisHotel;
    //   } else{
    //     this.favourites = false;
    //   }
    // },
  },
  components:{
    UiGalleria,
    HotelReview,
    HotelRooms,
    BlogSidebar
  }
}
</script>

<style scoped>

</style>



