<template>
  <TabMenu :model="items" />
  <router-view :rooms="rooms" />
</template>

<script>
export default {
  name: "HotelRooms",
  data() {
    return {
      items: [
        {label: 'Список', icon: 'pi pi-fw pi-list', to: `/hotels/${this.id}/list`},
        {label: 'Макет', icon: 'pi pi-fw pi-table', to: `/hotels/${this.id}/view`},
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