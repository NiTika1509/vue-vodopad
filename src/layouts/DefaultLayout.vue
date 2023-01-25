<template>
  <ui-admin v-if="user" />
  <header>
    <div class="wrapper header-wrapper">
      <div class="header-wrapper_logotype">
        <router-link to="/">
          <img src="../../public/img/icons/logo.png">
        </router-link>
      </div>
      <div class="header-wrapper_menu">
        <router-link to="/hotels">
          Отели
        </router-link>
      </div>
      <div class="header-wrapper_tools">
          <div class="tools-auth" v-if="user" >
            <ui-account :user="user" />
          </div>
          <template v-else>
              <div class="tools-no-auth">
                <PrimeButton type="button" icon="pi pi-user" label="Войти" @click="toggle" />
                <OverlayPanel ref="op" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '370px',height:'410px'}">
                  <auth-login />
                </OverlayPanel>
              </div>
          </template>
      </div>
    </div>
  </header>
    <main>
      <router-view />
    </main>
  <footer>
    <div class="wrapper">
      <div class="header-wrapper_logotype">
        <router-link to="/">
          Логотип
        </router-link>
      </div>
      <div class="header-wrapper_tools">
        Кнопочки
      </div>
    </div>
  </footer>
</template>

<script>
import UiAccount from "@/components/UI/UiAccount";
import AuthLogin from '@/../src/views/Auth/AuthLogin'
import UiAdmin from "@/components/UI/UiAdmin";
import { mapGetters } from "vuex";

export default {
  name: "DefaultLayout",
  computed: {
      ...mapGetters({ user: "getUserData" })
  },
  methods:{
    toggle(event) {
      this.$refs.op.toggle(event);
    },
  },
  components:{
     UiAccount, AuthLogin, UiAdmin,
  },
}


</script>

<style lang="sass" scoped>
.tools-no-auth
  .p-button
    border: none
    box-shadow: none
    i
      color: #0f5de4 !important
      font-size: 25px !important
      padding: 2px
      border-radius: 999px
      background: #ffffff
    span
      color: #ffffff !important
      font-size: 20px !important
      margin-left: 8px
      font-weight: 700
</style>