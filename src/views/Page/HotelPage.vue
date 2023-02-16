<template>


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
</section>
</template>

<script>
import { getHotelPreview } from "@/api/hotels";
import HotelsList from "@/components/Blocks/HotelList";
import BlogSidebar from "@/components/Blocks/BlogSidebar";
import { getPostToCount } from "@/api/blog";

export default {
  name: "HotelList",


  data(){
    return{
      hotels: null,
      loading: true,
      blog_post: [],
    }
  },
  async mounted(){
    try {
      this.loading = true;
      this.hotels = await getHotelPreview();
      this.blog_post = await getPostToCount(3);
    }catch (e){
      console.log(e);
    }finally {
      this.loading = false
    }

  },
  components: {
    BlogSidebar,
    HotelsList,
  },
}
</script>

<style scoped>

</style>