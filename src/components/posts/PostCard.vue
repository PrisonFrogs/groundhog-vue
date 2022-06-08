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
      <v-btn icon>
        <v-icon>mdi-heart-outline</v-icon>
        1
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
