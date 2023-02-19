<template>
  <TabMenu :model="items" :style="{'margin-bottom': '10px'}"/>
  <router-view :id="id" />
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
    id:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>