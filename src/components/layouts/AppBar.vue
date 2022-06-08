<template>
  <div>
    <v-app-bar dense>
      <v-tabs v-model="selectedTab" centered>
        <v-tab v-for="(tab, i) in tabs" :key="i" :disabled="tab.disabled">{{ tab.text }}</v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  data() {
    return {
      tabs: [{ text: '关注', disabled: true }, { text: '发现' }, { text: '地区', disabled: true }],
      selectedTab: 1,
    };
  },
};
</script>
