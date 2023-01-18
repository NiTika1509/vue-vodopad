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
      <div class="content-container">
        <template v-for="item in items" :key="item.id">
          <div :data-id="item.id" class="hotel-item">
            <div class="hotel-item_image">
              <PrimeGalleria :value="item.image" :responsiveOptions="responsiveOptions" :numVisible="5" containerStyle="max-width: 640px" :circular="true" :showItemNavigators="true" :showThumbnails="false">
                <template #item="data">
                  <img :src="data.item" style="width: 100%; display: block;" />
                </template>
              </PrimeGalleria>
            </div>
            <div class="hotel-item_content">
              <div class="content-header content-group">
                <div class="hotel-title">
                  <div class="hotel-star">
                    <template v-for="star in item.star" :key="star">
                      <i class="pi pi-star-fill" ></i>
                    </template>
                  </div>
                  <router-link :to="`hotel/`+ item.id">
                    {{ item.name }}
                  </router-link>
                  <span>
                    {{ item.adress }}
                  </span>
                </div>
                <div class="hotel-adventure">
                  <div class="hotel-rating">
                    <PrimeTag :severity="colorRating(item.rating)" :value="item.rating" />
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
                <router-link :to="`hotel/`+ item.id">
                  <PrimeButton label="Подобрать номер" />
                </router-link>
              </div>
            </div>
          </div>
        </template>
      </div>
      <aside class="sidebar-container">
        <div class="sidebar-container-header">
          <router-link to="/">
            Гид по выбору
          </router-link>
        </div>
      </aside>
    </div>
  </div>
</section>
</template>

<script>
import { getHotelPreview } from "@/api/hotelList";
import UiBreadcrumb from "@/components/UI/UiBreadcrumb";

export default {
  name: "HotelList",
  components: {
    UiBreadcrumb
  },

  data(){
    return{
      items: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    }
  },
  async mounted(){
    this.items = await getHotelPreview();
  },
  methods:{
    colorRating(rating){
      if(rating > 7 ) return "success";
      else if(rating < 4)  return "danger";
      else return "warning";
    }
  },
}
</script>

<style scoped>

</style>