<template>
  <v-bottom-navigation
    :value="value"
    color="primary"
    class="bottom-bar"
  >
    <v-btn>
      <span>Recents</span>
    </v-btn>

    <v-btn>
      <span>Favorites</span>
    </v-btn>

    <v-btn>
      <span>Nearby</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
.bottom-bar{
  position: fixed;
  bottom: 0;
}
</style>
