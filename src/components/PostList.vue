<template>
  <h1>Post List</h1>
  <ul class="post-list">
    <li v-for="post in POSTS" :key="post.id">
      {{ post.title }}
    </li>
  </ul>
</template>

<script lang="ts">
  import { defineComponent,onMounted } from 'vue';
  import PostService from '@/services/PostService';

  export default defineComponent({
    name: 'PostList',
    setup() {
      // new instance of PostService
      const SERVICE = new PostService()
      const POSTS = SERVICE.getPostsList()

      // on mounted get all the posts
      onMounted(async () => {
        await SERVICE.fetchAll()  
      })

      // return only posts
      return { POSTS }
    }
  })
</script>

<style scoped>
  .post-list{
    width: 95vw;
    height: 75px;
    padding: 20px;
    list-style-type: none;
  }

  .post-list li{
    padding: 10px;
    width: 100%;
    border: 1px solid #ccc;
  }
</style>