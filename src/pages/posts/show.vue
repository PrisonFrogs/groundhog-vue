<template>
  <div>
    <TitleBar :author-nickname="post.author_nickname" />
    <v-progress-linear indeterminate color="primary" height="4" v-if="!loaded" />
      <v-img
        lazy-src="https://picsum.photos/id/11/10/6"
        height="50vh"
        width="100vw"
        class="mb-4"
        src="https://picsum.photos/id/11/500/300"
      ></v-img>
    <v-container>
      <div class="title mb-2">
        <b>{{ post.title }}</b>
      </div>
      <div class="content">
        <p>{{ post.content }}</p>
      </div>
    </v-container>
    <BottomBar />
  </div>
</template>

<script>
import { getPost } from '@/api/posts.api';
import TitleBar from './tittleBar.vue';
import BottomBar from './bottomBar.vue';

export default {
  name: 'PostShow',
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      loaded: false,
    };
  },
  components: {
    TitleBar,
    BottomBar,
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      getPost(this.id).then((payload) => {
        this.post = payload.post;
        this.loaded = true;
      });
    },
  },
};
</script>
