<template>
  <v-card>
      <v-toolbar color='gray' dark flat>
        <template>
          <v-tabs v-model='tab' centered>
            <v-tabs-slider color='red'></v-tabs-slider>

            <v-tab v-for='item in items' :key='item.tab'>
              {{ item.tab }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model='tab'>
        <v-tab-item v-for='item in items' :key='item.tab'>
          <v-card flat>
              <component v-bind:is="item.content"/>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
</template>

<script>
import TabNote from '@/components/profiles/TabNote.vue';
import TabCollect from '@/components/profiles/TabCollect.vue';
import TabLiked from '@/components/profiles/TabLiked.vue';

export default {
  name: 'ProfileTabs',
  components: {
    TabNote,
    TabCollect,
    TabLiked,
  },
  data() {
    return {
      tab: 0,
      items: [
        { tab: '笔记', content: TabNote },
        { tab: '收藏', content: TabCollect },
        { tab: '赞过', content: TabLiked },
      ],
    };
  },
};
</script>
