<template>


  <div v-for="category of categories" :key="category" >
    <h1>{{ category }}</h1>
    <template v-for="room of items_room" :key="room">
      <template v-if="room.category == category ">
          {{ room }}
      </template>
    </template>
  </div>


</template>

<script>
export default {
  name: "RoomsList",
  data(){
    return{
      categories: [],
      items_room: []
    }
  },
  props:{
    rooms:{
      type: Array
    }
  },
  async mounted(){
    await this.rooms.forEach( (floor) => {
      floor.items.forEach((floorRoom)=>{
        floorRoom.floorItems.forEach(room=>{
          this.items_room.push(room)
        })
      })
    })
    await this.items_room.forEach( item =>{
      if(this.categories.indexOf(item.category) === -1){
        this.categories.push(item.category)
      }
    })

  }
}
</script>

<style scoped>

</style>