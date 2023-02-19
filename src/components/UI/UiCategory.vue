<template>
  <PrimeGalleria
      :value="category.photo"
      :numVisible="5"
      containerStyle="max-width: 640px"
      :circular="true"
      :showItemNavigators="true"
      :showThumbnails="false">
    <template #item="data">
      <img :src="data.item" style="width: 100%; display: block;" />
    </template>
  </PrimeGalleria>

</template>

<script>
export default {
  name: "UiCategory",
  props:['category']
}
</script>

<style scoped>

</style>