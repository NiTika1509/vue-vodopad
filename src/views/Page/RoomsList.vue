<template>
  <div class="list-room-items">
    <template v-for="category in categories" :key="category">
      <div class="list-room-item">


        <div class="list-room-item-table">
          <div class="list-room-item-table_image">
            <PrimeImage :src="category.photo[0]" />
            <span class="list-room-item-table_image-count">{{ category.photo.length }} фото</span>
          </div>
          <div class="list-room-item-table-title">
            <div class="list-room-item-table-name">
              {{ category.name }}
            </div>
          </div>
        </div>


        <div class="list-room-subtable">
          <DataTable :value="category.category_item" responsiveLayout="scroll">
            <TableColumn header="Id" >
              <template #body="{data}">
                {{ data.advantes}}
                <div>Двухспальная кровать</div>
                <div>Питание не включено</div>
                <div>Окно</div>
                <div>Для некурящих</div>
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
export default {
  name: "RoomsList",
  data(){
    return{
      categories: [],
      loading: true
    }
  },
  props:{
    rooms:{
      type: Array,
      required: true
    }
  },
  async mounted(){
    try {
      this.loading = true;
      await this.rooms.forEach( (floor) => {
        floor.floorItems.forEach(room => {


          let isCategory = this.categories.find( category => category.name === room.category);

          if(!isCategory && room.status){
            this.categories.push({
              name: room.category,
              photo: room.photoGallery,
              category_item: [room]
            })
          } else if(isCategory && room.status) {
            isCategory.category_item.push(room)
          }

        })
      })
    }catch (e) {
      console.log(e)
    }finally {
      this.loading = false;
    }


  },
  methods:{
    booking(order){
        console.log(order)
    }
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