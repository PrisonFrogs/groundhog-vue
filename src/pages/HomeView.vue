<template>
  <div class="home">
    <Posts />
    <BottomNav />

  </div>
</template>

<script>
// @ is an alias to /src
import Posts from '@/components/posts/index.vue';
import { mapActions } from 'vuex';
import BottomNav from '@/components/layouts/BottomNav.vue';

export default {
  name: 'HomeView',
  components: {
    Posts,
    BottomNav,
  },
  methods: {
    ...mapActions(['unsetLoading']),
  },
  mounted() {
    this.unsetLoading();
  },
};
</script>
