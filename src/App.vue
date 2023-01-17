<template>
    <component :is="layout">
      <error-handler></error-handler>
      <router-view/>
    </component>
</template>


<script>
import AuthLayout from '@/layouts/AuthLayout'
import AdminLayout from '@/layouts/AdminLayout'
import DefaultLayout from '@/layouts/DefaultLayout'
import UiAdmin from "@/components/UI/UiAdmin"
import ErrorHandler from "@/components/ErrorHandler";

export default {

  computed: {
    layout () {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  },
  components: {
    ErrorHandler, AuthLayout, AdminLayout, DefaultLayout, UiAdmin
  }
}
</script>

<style lang="sass">




</style>
