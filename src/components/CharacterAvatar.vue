<template>
  <v-avatar color="primary" :size="size">
    <span class="white--text">{{ authorNickname.charAt(0) | capitalize }}</span>
  </v-avatar>
</template>

<script>
export default {
  name: 'CharacterAvatar',
  props: {
    authorNickname: {
      type: String,
      default: '?',
    },
    size: {
      type: Number,
      default: 32,
    },
  },
};
</script>
