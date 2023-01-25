<template >
    <PrimeBreadcrumb v-if="breadCrumbs[1]" :home="breadCrumbs[0].home" :model="breadCrumbs[1]" />
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