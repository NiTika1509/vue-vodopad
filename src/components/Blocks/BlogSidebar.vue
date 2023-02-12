<template>

  <div class="sidebar-container-body_items">
    <div class="sidebar-container-body_item" v-for="post in posts" :key="post">
      <router-link :to="`/blog/${post.id}`">
        <div class="sidebar-container-body_item-image">
          <div class="item-image_container">
            <PrimeImage :src="post.previewPhoto" :alt="post.name"/>
          </div>
        </div>
        <div class="sidebar-container-body_item-info">
          <div class="item-info-tag">
            {{ post.tags[0] }}
          </div>
          <div class="item-info-date">
              {{ post.createDate }}
          </div>
        </div>
        <div class="sidebar-container-body_item-name">
            {{ post.name }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: "BlogSidebar",
  props:{
    posts:{
      type: Array,
      default: ()=> []
    }
  }
}
</script>

<style scoped>

</style>