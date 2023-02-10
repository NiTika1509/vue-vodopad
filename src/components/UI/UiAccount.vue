<template>
    <div v-if="loading" class="loading-box">
      <progress-spinner strokeWidth="10" />
    </div>
    <div v-else class="account-avatar">
      <div class="account-avatar-wrapper" label="Toggle" @click="toggle">
        <PrimeAvatar
            class="p-avatar-circle"
            :image="user.photoURL"/>
      </div>
      <TieredMenu ref="menu" :model="items" :popup="true" />
    </div>
</template>

<script>
export default {
  name: "UiAccount",
  props:{
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      items: [
        {
          label:'Профиль', to: `/personal/${localStorage.getItem('token')}`
        },
        {
           label:'Уведомления',
        },
        {
           label:'Настройки',
        },
        {
          separator:true
        },
        {
          label:'Выйти', icon:'pi pi-fw pi-power-off',command: (e) => {
            console.log(e)
              this.logout(e);
          }
        }
      ],
      token: null,
      loading: false
    }
  },

  methods:{
    toggle(event) {
      this.$refs.menu.toggle(event)
    },
    async logout(){
      try {
        await this.$store.dispatch('logout');
      }catch (e) {
        this.$store.commit('setError', e.message);
      }finally {
        this.loading = true
        setTimeout(()=>{this.$router.push("/login")},1000);
      }
    }
  },
}
</script>

<style lang="sass">

</style>