<template >
    <PrimeBreadcrumb v-if="breadCrumbs[1]" :home="breadCrumbs[0].home" :model="breadCrumbs[1]" />
</template>

<script>

export default {
  name: "UiBreadcrumb",
  data() {
    return {
      home: {icon: 'pi pi-home', to: '/admin'},
    }
  },
  computed:{
    breadCrumbs(){
      if(this.$route.meta?.breadCrumbs){
        console.log(this.$route.meta.breadCrumbs())
        return this.$route.meta.breadCrumbs();

      }else{
        return [];
      }
    },
  },
}
</script>

<style lang="sass" scoped>
</style>