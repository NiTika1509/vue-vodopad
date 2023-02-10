<template>
  {{ posts }}
  <div class="sidebar-container-body_items">
    <template v-for="post in posts" :key="post">
        <div class="sidebar-container-body_item">
          <router-link to="">
            <div class="sidebar-container-body_item-image">
              <div class="item-image_container">
                <PrimeImage :src="post.preview_photo" />
              </div>
            </div>
            <div class="sidebar-container-body_item-info">
              <div class="item-info-tag">
                {{ post.tags[0] }}
              </div>
              <div class="item-info-date">
                  {{ post.create_date }}
              </div>
            </div>
            <div class="sidebar-container-body_item-name">
                {{ post.name }}
            </div>
          </router-link>
        </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "BlogSidebar",
  props: {
    posts:{
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>