<template>
    <div class="account-avatar">
      <div class="account-avatar-wrapper" label="Toggle" @click="toggle">
        <PrimeAvatar class="p-avatar-circle" v-bind:image="user.photoURL" v-badge.danger="user.notification.length - 1" />
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
              this.logout(e);
          }
        }
      ],
      token: null,
    }
  },

  methods:{
    toggle(event) {
      this.$refs.menu.toggle(event)
    },
    async logout(){
      try {
        await this.$store.dispatch('logout');
        await this.$router.push('/');
      }catch (e) {
        this.$store.commit('setError', e.message);
      }
    }
  },
}
</script>

<style lang="sass">

</style>