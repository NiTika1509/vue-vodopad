<template>
  <h1>Отели</h1>
  <div class="page-wrapper-content">
    <div class="page-wrapper-content-header">

    </div>
    <div class="page-wrapper-content-body">
      <div class="hotels-list-wrapper">
        <DataTable
            class="p-datatable-customers"
            dataKey="id"
            :value="hotels"
            v-model:expandedRows="expandedRows"
            @rowExpand="onRowExpand"
            @rowCollapse="onRowCollapse"
        >

          <template #empty>
            Элементы не найдены
          </template>
          <template #loading>
            Loading customers data. Please wait.
          </template>
          <TableColumn :expander="true" headerStyle="width: 3em"></TableColumn>
          <TableColumn header="Имя" headerStyle="width: 10em">
            <template #body="{ data }">
              {{ data.name }}
            </template>
          </TableColumn>
          <TableColumn header="Фото" >
            <template #body="{ data }">
                <PrimeImage class="hotel-item_picture" :src="data.image[1]" />
            </template>
          </TableColumn>

          <TableColumn header="Рейтинг">
            <template #body="{ data }">
              <PrimeRating :cancel="false" :stars="data.star" />
            </template>
          </TableColumn>


        </DataTable>
      </div>
    </div>
    <div class="page-wrapper-content-footer">

    </div>
  </div>
</template>

<script>

import { getHotelAdminList } from "@/api/hotelList";
// ЗАМЕНИТЬ МЕТОДЫ НА КОМПУТЕД
export default {
  name: "AdminHotel",
  data(){
    return {
       hotels: null,
    }
  },
  async mounted(){
    this.hotels = await this.fetchHotel()
  },
  methods:{
    async fetchHotel(){
      try {
        const hotelValue = await getHotelAdminList();
        console.log(hotelValue);
        return hotelValue;
      }catch (e){
        this.$store.commit('setError',e.code);
      }
    },
    onRowSelect(event) {
      console.log("Выбрана" + event)
    },
    onRowUnselect(event) {
      console.log("Убрана" + event)
    }
  },
}
</script>

<style scoped>

</style>