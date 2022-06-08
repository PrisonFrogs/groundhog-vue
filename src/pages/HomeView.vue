<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/posts/index.vue';

export default {
  name: 'HomeView',
  components: {
    Posts,
  },
};
</script>
