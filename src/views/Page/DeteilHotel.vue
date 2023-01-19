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
          {{ id }}
          {{ hotel }}
        </div>
      </div>
    </div>
  </section>

</template>

<script>

import UiBreadcrumb from "@/components/UI/UiBreadcrumb";
import { getHotelDetail } from "@/api/hotelList";

export default {
  name: "DeteilHotel",
  data(){
    return{
      id: this.$route.params['id'],
      hotel: {},
      rooms: null
    }
  },
  async mounted(){
     console.log(await getHotelDetail(this.id));
  },
  methods:{

  },
  components:{
    UiBreadcrumb
  }
}
</script>

<style scoped>

</style>