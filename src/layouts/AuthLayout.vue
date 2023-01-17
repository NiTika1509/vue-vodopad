<template>
  <error-handler :if="getErrorMsg"></error-handler>
  <header>
    <div class="header-wrapper">
      <div class="header-wrapper_logotype">
        <router-link to="/">
          <img src="../../public/img/icons/logo.png">
        </router-link>
      </div>
      <div class="header-wrapper_tools">

      </div>
    </div>
  </header>
  <main>
    <div class="empty-layout">
      <div class="auth-form-wrapper">
        <div class="auth-form-header">
          <div class="auth-form-header-logotype text-center mb-5">
            <img src="../../public/img/icons/liquid_waterfall_water_moisture_cascade_icon_226318.svg" alt="Image">
            <div class="text-900 text-3xl font-medium mb-3">Vodopad</div>
          </div>
        </div>
          <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="wrapper">
      <div class="header-wrapper_logotype">
        <img src="../../public/img/icons/logo.png">
      </div>
      <div class="header-wrapper_tools">
        Кнопочки
      </div>
    </div>
  </footer>
</template>

<script>
import ErrorHandler from "@/components/ErrorHandler";


export default {
  name: "AuthLayout",
  data(){
    return {
      user: null,
    }
  },

  mounted() {
    this.getUserData();
  },
  methods:{
    getUserData(){
      this.user = this.$store.getters.getUserData
    },
    getErrorMsg() {
      return true;
    },
    toggle(event) {
      this.$refs.op.toggle(event);
    },
  },
  components:{
    ErrorHandler
  },
}


</script>

<style scoped>

</style>