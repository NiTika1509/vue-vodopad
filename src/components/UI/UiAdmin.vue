<template>
<div id="ui-admin-panel">
  <router-link to="/admin">
    <PrimeButton class="p-button-success p-button-rounded" label="Админпанель" icon="pi pi-sign-in" type="button" />
  </router-link>
</div>
</template>

<script>
export default {
  name: "UiAdmin"
}
</script>

<style lang="sass" scoped>
  #ui-admin-panel
    height: 60px
    width: 100%
    display: flex
    padding-right: 40px
    padding-left: 40px
    align-items: center
    background: #212121
    a
      text-decoration: none
</style>