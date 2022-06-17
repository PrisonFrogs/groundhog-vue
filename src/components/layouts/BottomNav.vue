<template>
  <v-bottom-navigation
    v-model="getCurrentPage"
    class="bottom-bar"
  >
    <div v-for="page in allListPages" :key="page.id" value="page.title">
      <v-btn @click="redirectPage(page.title)">
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
    redirectPage(title) {
      this.clickPage(title);
    },
  },
  computed: mapGetters(['allListPages', 'getCurrentPage']),
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
}
</style>
