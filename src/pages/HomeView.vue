<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/posts/index.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Posts,
  },
  methods: {
    ...mapActions(['unsetLoading']),
  },
  mounted() {
    this.unsetLoading();
  },
};
</script>
