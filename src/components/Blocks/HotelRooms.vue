<template>
  <TabMenu :model="items" :style="{'margin-bottom': '10px'}"/>
  <router-view :rooms="rooms" />
</template>

<script>
export default {
  name: "HotelRooms",
  data() {
    return {
      items: [
        {label: 'Список', icon: 'pi pi-fw pi-list', to: { name: "rooms-list", params: { id: this.id }}},
        {label: 'Макет', icon: 'pi pi-fw pi-table', to: { name: "rooms-view", params: { id: this.id }}},
      ]
    }
  },
  props:{
    rooms:{
      type: Object,
      required: true
    },
    id:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>