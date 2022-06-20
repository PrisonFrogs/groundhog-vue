<template>
  <v-toolbar tile color="grey lighten-5" flat>
    <v-toolbar-title>
      <v-btn icon @click="goBack"><b class="back-btn">&lt;</b></v-btn>
      <CharacterAvatar :author-nickname="authorNickname" />
      {{ authorNickname }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn color="primary" rounded small outlined> 分享 </v-btn>
  </v-toolbar>
</template>

<script>
import CharacterAvatar from '@/components/CharacterAvatar.vue';

export default {
  name: 'PostTitlebar',
  components: {
    CharacterAvatar,
  },
  props: {
    authorNickname: {
      type: String,
      default: '?',
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back-btn {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
