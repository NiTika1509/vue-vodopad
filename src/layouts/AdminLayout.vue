<template>
  <error-handler :if="getErrorMsg"></error-handler>
  <div class="app-admin-container">
    <div class="app-admin-layout">

      <PrimeSplitter style="height:100vh" :step="100">
        <SplitterPanel :size="10" layout="vertical" class="sidebar-container sidenav app-sidenav">
            <div class="sidebar-container-logotype">
              <router-link to="/">
                <img src="../../public/img/icons/logo.png" alt="">
              </router-link>
            </div>
            <div class="sidebar-container-menu">
              <nav class="sidebar-container-menu_navbar">
                <PanelMenu :model="items"></PanelMenu>
              </nav>
            </div>
        </SplitterPanel>
        <SplitterPanel :size="85">
          <main class="app-content">
            <div class="app-content-header">
              <div class="app-content-header_date">
                <span class="header_date-time">
                  {{ date }}
                </span>
              </div>
              <div class="app-content-header_tools">

                <div class="account-container">
                  <ui-account v-if="user != null" :user="user" />
                </div>
              </div>
            </div>
            <div class="app-content-container">
              <ui-breadcrumb></ui-breadcrumb>
              <div class="app-content-container-page">
                <router-view />
              </div>
            </div>
          </main>
        </SplitterPanel>
      </PrimeSplitter>
      <PrimeSidebar v-model:visible="visibleRight" position="right">
        Content
      </PrimeSidebar>
    </div>
  </div>

</template>

<script>
import UiAccount from "@/components/UI/UiAccount";
import UiBreadcrumb from "@/components/UI/UiBreadcrumb"
import {adminNavigation} from "@/data/admin.navigation"
import ErrorHandler from "@/components/ErrorHandler";
import { mapGetters } from "vuex";

export default {
  name: "AdminLayout",
  data() {
    return {
      date: null,
      items: adminNavigation,
    }
  },
  computed: {
      ...mapGetters({ user: "getUserData" }),
  },
  mounted() {
    this.dateFilter();
    setInterval(() => {
      this.dateFilter()
    }, 1000)
  },
  methods: {
    dateFilter() {
      const options = {
        hour: '2-digit',
        minute: '2-digit',
      }
      this.date = new Intl.DateTimeFormat('ru-RU', options).format(new Date())

    },
    getErrorMsg() {
      return true;
    }
  },
  components:{
    ErrorHandler, UiBreadcrumb, UiAccount
  }
}
</script>

<style scoped>

</style>