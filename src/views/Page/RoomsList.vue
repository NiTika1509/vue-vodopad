<template>

<!--  <DataTable :value="categories" v-model:expandedRows="expandedRows" dataKey="id"-->
<!--             @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" responsiveLayout="scroll">-->

<!--    <TableColumn :expander="true" headerStyle="width: 3rem" />-->
<!--    <TableColumn field="name" header="Name" sortable></TableColumn>-->
<!--    <template #expansion="slotProps">-->
<!--      <div class="orders-subtable">-->
<!--        {{ slotProps }}-->
<!--&lt;!&ndash;        <DataTable :value="items_room" responsiveLayout="scroll">&ndash;&gt;-->
<!--&lt;!&ndash;          <template v-if="room.category == slotProps">&ndash;&gt;-->
<!--&lt;!&ndash;            &ndash;&gt;-->
<!--&lt;!&ndash;          </template>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn field="name" header="Id" sortable></TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn field="customer" header="Customer" sortable></TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn field="date" header="Date" sortable></TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn field="price" header="Цена" sortable>&ndash;&gt;-->
<!--&lt;!&ndash;            <template #body="slotProps" sortable>&ndash;&gt;-->
<!--&lt;!&ndash;              {{formatCurrency(slotProps.data.amount)}}&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;          </TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn field="sleepPlace" header="Спальные места" sortable>&ndash;&gt;-->
<!--&lt;!&ndash;            <template #body="slotProps">&ndash;&gt;-->
<!--&lt;!&ndash;              <span :class="'order-badge order-' + slotProps.data.status.toLowerCase()">{{slotProps.data.status}}</span>&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;          </TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;          <TableColumn headerStyle="width:4rem">&ndash;&gt;-->
<!--&lt;!&ndash;            <template #body>&ndash;&gt;-->
<!--&lt;!&ndash;              <Button icon="pi pi-search" />&ndash;&gt;-->
<!--&lt;!&ndash;            </template>&ndash;&gt;-->
<!--&lt;!&ndash;          </TableColumn>&ndash;&gt;-->
<!--&lt;!&ndash;        </DataTable>&ndash;&gt;-->
<!--      </div>-->
<!--    </template>-->
<!--  </DataTable>-->

  {{ categories }}

<!--  <template v-for="category in categories" :key="category">-->
<!--    <h1>{{ category }}</h1>-->
<!--&lt;!&ndash;    <template v-for="room of items_room" :key="room">&ndash;&gt;-->
<!--&lt;!&ndash;      <template v-if="room.category === category">&ndash;&gt;-->
<!--&lt;!&ndash;          {{ room }}&ndash;&gt;-->
<!--&lt;!&ndash;      </template>&ndash;&gt;-->
<!--&lt;!&ndash;    </template>&ndash;&gt;-->
<!--  </template>-->



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


    this.rooms.forEach( (floor) => {
      floor.items.forEach((floorRoom)=>{
        floorRoom.floorItems.forEach(room=>{
          this.items_room.push(room)
        })
      })
    })



    this.items_room.forEach( item =>{
      let isCategory = this.categories.findIndex( category => category.name === item.category);
      if(isCategory === -1){
        this.categories.push({
          name: item.category,
          photo: item.photoGallery,
        })
      }
    })

    this.items_room.filter( room => {
      room.category == 6


    });





  }
}
</script>

<style scoped>

</style>