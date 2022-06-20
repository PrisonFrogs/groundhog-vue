<template>
  <div :class="topClass">
    <v-list three-line>
      <v-list-item>
        <v-list-item-avatar>
          <CharacterAvatar :author-nickname="comment.author_nickname" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ comment.author_nickname }}</v-list-item-title>
          <v-list-item-subtitle>
            <span class="text--primary">{{ comment.content }}</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle>Reply</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import CharacterAvatar from '@/components/CharacterAvatar.vue';

export default {
  name: 'CommentCard',
  props: {
    comment: {
      type: Object,
      required: true,
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CharacterAvatar,
  },
  computed: {
    topClass() {
      return this.divider ? 'bt-1 comment' : 'comment';
    },
  },
};
</script>

<style scoped>
.bt-1 {
  border-top: 1px solid #e0e0e0;
}
.comment {
  height: 100%;
}
</style>
