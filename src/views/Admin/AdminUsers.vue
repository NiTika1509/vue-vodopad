<template>
  <h1>Пользователи</h1>
  <div>
    <div class="page-header">

    </div>
    <div class="page-body">
      <DataTable :value="users" class="p-datatable-customers" v-model:selection="selectedUsers">

        <template #empty>
          No customers found.
        </template>
        <template #loading>
          Loading customers data. Please wait.
        </template>
        <TableColumn selectionMode="multiple" headerStyle="width: 3em"></TableColumn>
        <TableColumn field="email" header="Почта" headerStyle="width: 15em">
          <template #body="{data}">
            {{data.email}}
          </template>
        </TableColumn>
        <TableColumn header="Имя" >
          <template #body="{data}">
            <div :style="{'display':'flex','align-items':'center'}">
              <PrimeAvatar class="p-avatar-circle" :image="data.photoURL" :style="{'margin-right':'10px'}" />
              {{data.name}}
            </div>
          </template>
        </TableColumn>

        <TableColumn field="admin" header="Права">
          <template #body="{data}">
            <PrimeTag v-if="data.admin" value="Администратор" severity="success" class="p-avatar-circle" />
          </template>
        </TableColumn>


      </DataTable>
    </div>
  </div>
</template>

<script>
// import UsersItems from "@/components/Blocks/UsersItems";
import { UsersList } from "@/api/usersList";

export default {
  name: "AdminUsers",
  data(){
    return{
      users: null,
      selectedUsers: null,
    }
  },
  async mounted(){
    this.users = await this.getUsersList()
  },
  methods:{
    async getUsersList(){
      try {
        const userValue = await UsersList();
        return userValue;
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
  components:{
  }
}
</script>

<style scoped>

</style>