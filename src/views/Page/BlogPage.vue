<template>
  {{ posts }}
</template>

<script>
import { getPostToCount } from "@/api/blog";

export default {
  name: "BlogPage",
  data(){
    return{
      posts: [],
      count: 3 ,
    }
  },
  async mounted(){
    try {

      this.posts = await getPostToCount(this.count)

    }catch (e) {
      console.log(e)
    }

  }
}
</script>

<style scoped>

</style>