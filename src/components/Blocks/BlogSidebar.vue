<template>
  <div class="sidebar-container-body_items">
    <template v-for="post in blog_post" :key="post">
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
import {sidebarBlogList} from "@/api/blog";

export default {
  name: "BlogSidebar",
  data(){
    return{
      blog_post: [],
    }
  },
  async mounted() {
    try {
      this.blog_post = await sidebarBlogList(3);
    }catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>