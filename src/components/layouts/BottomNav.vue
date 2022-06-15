<template>
  <v-bottom-navigation
    :value="value"
    class="bottom-bar"
  >
    <div v-for="item in allListItems" :key="item.id">
      <v-btn>
        <span>{{ item.title }}</span>
      </v-btn>
    </div>

  </v-bottom-navigation>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({ value: 1 }),
  computed: mapGetters(['allListItems']),
};
</script>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
}
</style>
