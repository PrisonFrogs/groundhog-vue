<template>
  <div>
    <AppBar />
    <v-container>
      <v-row>
        <v-col v-for="post in posts" :key="post.id" :cols="6">
          <PostCard :post="post"></PostCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { getPosts } from '@/api/posts';
import AppBar from '@/components/layouts/AppBar.vue';
import PostCard from './PostCard.vue';

export default {
  name: 'PostsIndex',
  components: {
    PostCard,
    AppBar,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      getPosts().then((payload) => {
        this.posts = payload.posts;
      });
    },
  },
};
</script>
