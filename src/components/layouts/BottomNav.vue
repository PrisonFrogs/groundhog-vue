<template>
  <v-bottom-navigation class="bottom-bar" v-model="currentPage">
    <div v-for="page in allListPages" :key="page.id" value="page.id">
      <v-btn>
        <span>{{ page.title }}</span>
      </v-btn>
    </div>
  </v-bottom-navigation>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['clickPage']),
    redirectPage(id) {
      this.clickPage(id);
    },
  },
  computed: {
    ...mapGetters(['allListPages', 'getCurrentPage']),
    currentPage: {
      get() {
        return this.getCurrentPage;
      },
      set(id) {
        this.clickPage(id);
      },
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  height: 30px !important;
  line-height: 2;
}
</style>
