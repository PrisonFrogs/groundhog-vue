<template>
  <v-toolbar tile color="grey lighten-5" flat>
    <v-toolbar-title>
      <v-btn icon @click="goBack"><b class="font-weight-bold">&lt;</b></v-btn>
      <v-avatar color="primary" size="32">
        <span class="white--text">{{ authorNickname.charAt(0) | capitalize }}</span>
      </v-avatar>
      {{ authorNickname }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn color="primary" rounded small outlined> 分享 </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'PostTitlebar',
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
