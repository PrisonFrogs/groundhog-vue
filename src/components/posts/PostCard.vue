<template>
  <v-card>
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/plane.jpg"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200px"
    >
    </v-img>

    <v-card-actions class="pb-0">
      {{ post.title }}
    </v-card-actions>

    <v-card-actions>
      <v-icon>mdi-account</v-icon>
      {{ post.author_nickname }}
      <v-spacer></v-spacer>
      <v-btn @click="switchLike" icon>
        <v-icon :color="color">mdi-heart{{ outlinedElementName }}</v-icon>
        {{ currentLikesCount }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { likePost } from '@/api/posts.api';

export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      liked: false,
      currentLikesCount: 0,
    };
  },
  computed: {
    outlinedElementName() {
      return this.liked ? '' : '-outline';
    },
    color() {
      return this.liked ? 'accent' : '';
    },
  },
  created() {
    this.currentLikesCount = this.post.likes_count;
    this.liked = this.post.liked_by_current_user;
  },
  methods: {
    onClick() {
      this.$router.push({
        name: 'post',
        params: {
          id: this.post.id,
        },
      });
    },
    async switchLike() {
      const { result } = await likePost(this.post.id);

      this.currentLikesCount = result ? this.currentLikesCount += 1 : this.currentLikesCount -= 1;
      this.liked = result;
    },
  },
};
</script>
