<template>
  <v-card>
      <v-toolbar color='gray' dark flat>
        <template>
          <v-tabs v-model='tab' centered>
            <v-tabs-slider color='red'></v-tabs-slider>

            <v-tab v-for='item in items' :key='item'>
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model='tab'>
        <v-tab-item v-for='item in items' :key='item'>
          <v-card flat>
            <v-card-text v-text='text'></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
</template>

<script>
export default {
  name: 'ProfileTabs',
  data() {
    return {
      tab: null,
      items: [
        '笔记', '收藏', '赞过',
      ],
      text: '',
    };
  },
};
</script>
