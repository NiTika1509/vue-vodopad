<template>

  <DialogPrime :header="active.name" v-model:visible="display" >
    <ui-category :category="active" />
  </DialogPrime>


  <div class="list-room-items">
    <template v-for="category in rooms" :key="category">
      <div class="list-room-item">
        <div class="list-room-item-table" @click="toggleCategory(category)">
          <div class="list-room-item-table_image">
            <PrimeImage :src="category.photo[0]" />
            <span class="list-room-item-table_image-count">{{ category.photo.length }} фото</span>
          </div>

          <div class="list-room-item-table-title">
            <div class="list-room-item-table-name">
              {{ category.name }}
            </div>
            <div class="list-room-item-table-tags">
              <div class="list-room-item-table-tag"><img src="https://st.worldota.net/master/ecc943c-3eccbb7/img/svg/amenitiesroom/square.svg" alt="">{{ category.square }}м<sup>2</sup></div>
            </div>
          </div>
        </div>
        <div class="list-room-item-subtable">
          <DataTable :value="category.items" responsiveLayout="scroll">
            <TableColumn header="Преймущества" >
              <template #body="{data}">
                <div class="list-room-item-subtable-tag">
                  <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='15' viewBox='0 0 20 17'><path d='M15.3.8c1 0 1.7.7 1.7 1.6l.5 3.2c.3.2.6.5.8.9l1 2.2a3.7 3.7 0 01.2 2.2l-.8 4.6a.7.7 0 01-.7.6H17a.7.7 0 01-.7-.6l-.4-1.8h-2.7a.7.7 0 010-1.4h2.9c.5 0 .9.3 1 .7l.1.2.2.8.7-3.3a2.3 2.3 0 00-.2-1.4L17 7a.4.4 0 00-.3-.3.7.7 0 01-.5-.6l-.5-3.6c0-.2-.2-.4-.4-.4H4.7c-.2 0-.3.2-.4.5l-.6 3.6a.7.7 0 01-.5.5.4.4 0 00-.2.3L2 9.3a2.3 2.3 0 00-.2 1.4l.7 3.2.1-.7.1-.2c.2-.4.6-.7 1-.7h2.8a.7.7 0 110 1.4H4l-.4 1.8a.7.7 0 01-.6.6H2a.7.7 0 01-.7-.6l-.8-4.6a3.7 3.7 0 01.2-2.2l1-2.2c.2-.4.4-.6.7-.8L3 2.5C3 1.5 3.8.8 4.7.8zM9.9 13.1c.4 0 .6 0 .8.3.2.2.3.4.3.7 0 .3 0 .6-.3.8a1 1 0 01-.8.3 1 1 0 01-1-1c0-.4 0-.6.3-.8.2-.2.4-.3.7-.3zm0-9a4.5 4.5 0 011.5.3c.4.1.8.3 1 .6.4.2.6.5.7.9.2.3.2.7.2 1 0 .6 0 1-.2 1.3a3.1 3.1 0 01-.5.8l-.6.6-.6.6a3 3 0 00-.5.7 2.2 2.2 0 00-.2.8v.2H9.2c0-.5 0-1 .2-1.3a3.2 3.2 0 011.1-1.5l.7-.6.4-.6c.2-.2.2-.5.2-.8 0-.5-.1-.8-.4-1.1-.3-.3-.8-.4-1.4-.4-.6 0-1 .1-1.4.4-.3.3-.4.6-.5 1.1v.2H6.6c0-.5 0-.9.2-1.3l.7-1a3 3 0 011-.6 4 4 0 011.4-.2z' fill='%232D3137' fill-opacity='.8'/></svg>">
                  {{data.sleep}}x Спальные места
                </div>
              </template>
            </TableColumn>
            <TableColumn field="id" header="Оплата" headerStyle="width: 200px">
              <template #body="{data}">
                <template v-if="data.prepayment">
                  <div class="list-room_payment">
                    <span class="true-text-color">
                      <i class=" pi pi-undo" />Бесплатная отмена
                    </span>
                    <span>
                      <i class=" pi pi-credit-card" />Предоплата
                    </span>
                  </div>
                </template>
                <template v-else>
                  <div class="list-room_payment">
                    <span>
                      <i class=" pi pi-undo" />50% от стоимости
                    </span>
                    <span>
                      <i class=" pi pi-credit-card" />Оплата при заезде
                    </span>
                  </div>
                </template>
              </template>
            </TableColumn>
            <TableColumn field="price" header="Стоимость" headerStyle="width: 250px" sortable>
              <template #body="{data}">
                <div class="list-room_price">
                  <span class="price">{{ data.price }} ₽</span>
                  <span class="tax">Цена указана с учётом налогов</span>
                  <span class="info">за ночь для 2 гостей</span>
                </div>
              </template>
            </TableColumn>


            <TableColumn>
              <template #body="{data}">
                <PrimeButton @click="booking(data)" label="Забронировать" />
              </template>
            </TableColumn>

          </DataTable>
        </div>
      </div>
    </template>

  </div>
</template>

<script>
import UiCategory from "@/components/UI/UiCategory";
import {getListRooms} from "@/api/hotels";

export default {
  name: "RoomsList",
  data(){
    return{
      rooms: [],
      loading: true,
      display: false,
      active:{}
    }
  },
  props:{
    id:{
      type: Array,
      required: true
    }
  },
  async mounted(){
    try {
      this.loading = true;
      this.rooms = await getListRooms(this.id);
    }catch (e) {
      console.log(e)
    }finally {
      this.loading = false;
    }


  },
  methods:{
    booking(order){
        console.log(order)
    },
    toggleCategory(category){
      this.display = !this.display;

      if (this.display) this.active = category
      else this.active = {}
    }
  },
  components:{
    UiCategory
  }
}
</script>

<style lang="sass">
  .p-image
    width: 100px
    display: block
    img
      width: 100%
</style>