<template >
    <PrimeBreadcrumb v-if="breadCrumbs.path" :home="breadCrumbs.home" :model="breadCrumbs.path" />
</template>

<script>

export default {
  name: "UiBreadcrumb",
  computed:{
    breadCrumbs(){
      if(this.$route.meta?.breadCrumbs){
        return this.$route.meta.breadCrumbs.call(this, this.$route);
      }else{
        return [];
      }
    },
  },
}
</script>

<style lang="sass" scoped>
</style>