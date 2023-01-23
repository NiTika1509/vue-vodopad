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
          <hotels-list v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
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
import { getHotelPreview } from "@/api/hotelList";
import UiBreadcrumb from "@/components/UI/UiBreadcrumb";
import HotelsList from "@/components/Blocks/HotelList";
import BlogPage from "@/views/Page/BlogPage";

export default {
  name: "HotelList",
  components: {
    UiBreadcrumb, HotelsList, BlogPage
  },

  data(){
    return{
      hotels: null,
    }
  },
  async mounted(){
    this.hotels = await getHotelPreview();
  },
  methods:{


  },
}
</script>

<style scoped>

</style>