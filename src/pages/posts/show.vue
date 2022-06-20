<template>
  <div>
    <TitleBar :author-nickname="post.author_nickname" />
    <v-progress-linear indeterminate color="primary" height="4" v-if="!loaded" />
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      height="70vh"
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
      <div class="reply-section">
        <v-divider class="mb-2"></v-divider>
        In total {{ commentsCount }} Comments
        <CommentCard
          v-for="(comment, i) in comments"
          :comment="comment"
          :key="comment.id"
          :divider="i > 0"
        />
      </div>
    </v-container>
    <BottomBar
      :likes="post.likes_count"
      :liked="post.liked_by_current_user"
      @reply="fetchPost"
      :commentCount="commentsCount"
      v-if="loaded"
    />
  </div>
</template>

<script>
import { getPost } from '@/api/posts.api';
import TitleBar from './tittleBar.vue';
import BottomBar from './bottomBar.vue';
import CommentCard from './commentCard.vue';

export default {
  name: 'PostShow',
  data() {
    return {
      id: this.$route.params.id,
      post: {},
      comments: [],
      commentsCount: 0,
      loaded: false,
    };
  },
  components: {
    TitleBar,
    BottomBar,
    CommentCard,
  },
  created() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      getPost(this.id).then((payload) => {
        this.post = payload.post;
        this.comments = payload.comments;
        this.commentsCount = payload.comments_count;
        this.loaded = true;
      });
    },
  },
};
</script>

<style scoped>
.reply-section {
  margin-bottom: 30px;
}
</style>
