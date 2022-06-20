<template>
  <div class="bottom-bar" ref="bottomBar">
    <v-toolbar color="grey lighten-5" class="toolbar" outlined flat>
      <v-container fluid>
        <v-row>
          <template v-if="inputForcus">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="formData.content"
                  placeholder="Reply something nice"
                  prepend-inner-icon="mdi-pencil-outline"
                  @blur="onInputBlur"
                  filled
                  dense
                  rounded
                  @keydown.enter="reply"
                >
                  <template v-slot:append-outer>
                    <v-btn @click="reply" rounded small color="primary">send</v-btn>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </template>
          <template v-else>
            <v-col cols="6">
              <v-text-field
                v-model="formData.content"
                @focus="onInputFocus"
                placeholder="Reply something nice"
                prepend-inner-icon="mdi-pencil-outline"
                dense
                loader-height="1"
                single-line
                filled
                rounded
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <div class="pt-2">
                <a
                  class="font-weight-bold icon-text black--text"
                  @click.prevent="switchLike"
                  @keydown.enter="switchLike"
                >
                  <v-icon :color="likedColor">mdi-heart{{ outlinedElementName }}</v-icon>
                  {{ currentLikesCount }}
                </a>
                <div class="font-weight-bold icon-text">
                  <v-icon> mdi-star-check-outline </v-icon>
                  26
                </div>
                <div class="font-weight-bold icon-text">
                  <v-icon> mdi-message-outline </v-icon>
                  {{ commentCount }}
                </div>
              </div>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
import { likePost, createPost } from '@/api/posts.api';

export default {
  name: 'PostBottomBar',
  data() {
    return {
      formData: {
        post_id: this.$route.params.id,
        content: '',
      },
      currentLiked: this.liked,
      currentLikesCount: this.likes,
      inputForcus: false,
    };
  },
  computed: {
    outlinedElementName() {
      return this.currentLiked ? '' : '-outline';
    },
    likedColor() {
      return this.currentLiked ? 'accent' : '';
    },
  },
  props: {
    likes: {
      type: Number,
      default: 0,
    },
    liked: {
      type: Boolean,
      default: false,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    async switchLike() {
      const { result } = await likePost(this.$route.params.id);

      this.currentLikesCount = result
        ? (this.currentLikesCount += 1)
        : (this.currentLikesCount -= 1);
      this.currentLiked = result;
    },
    onInputFocus() {
      this.inputForcus = true;
    },
    onInputBlur() {
      this.inputForcus = false;
    },
    async reply() {
      await createPost(this.formData);

      this.formData.content = '';

      this.$emit('reply');
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow-y: hidden;
  font-size: 0.8rem;
  padding-top: 0.8rem;
  border-top: 0.3px solid #e0e0e0cf;
  background: white;
  height: 3.5rem;
}
.icon-text {
  margin-right: 0.5rem;
  display: inline;
}

.v-text-field >>> input {
  font-size: 0.8em;
  font-weight: 100;
}
.v-text-field >>> label {
  font-size: 0.8em;
}
.v-text-field >>> button {
  font-size: 0.8em;
}
</style>
