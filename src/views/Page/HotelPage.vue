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
          <hotels-list v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
      </div>
      <aside  class="sidebar-container">
        <div class="sidebar-container-header">
          <router-link to="/">
            Блог путешествинника
          </router-link>
        </div>

        <div class="sidebar-container-body">
          <blog-sidebar />
        </div>
      </aside>
    </div>
  </div>
</section>
</template>

<script>
import { getHotelPreview } from "@/api/hotels";
import UiBreadcrumb from "@/components/UI/UiBreadcrumb";
import HotelsList from "@/components/Blocks/HotelList";
import BlogSidebar from "@/components/Blocks/BlogSidebar";

export default {
  name: "HotelList",
  components: {
    BlogSidebar,
    UiBreadcrumb,
    HotelsList,
  },

  data(){
    return{
      hotels: null,
      loading: true
    }
  },
  async mounted(){
    try {
      this.loading = true;
      this.hotels = await getHotelPreview();
    }catch (e){
      console.log(e);
    }finally {
      this.loading = false
    }

  },
  methods:{


  },
}
</script>

<style scoped>

</style>