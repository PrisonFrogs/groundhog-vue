<template>
  <div class='profile'>
    <ProfileDrawer />
    <v-card class='d-flex mb-6' color='lighten-2' flat height='100'>
      <CharacterAvatar class='avatar' />

      <div class='d-flex flex-column mb-6 user-info'>
        <v-card
          v-for='n in tags'
          :key='n'
          class='pa-2'
          outlined
          tile
          color='transparent'
        >
          <span>{{ n }}</span>
        </v-card>
      </div>
    </v-card>

    <div class='user-info-2'>
      <small class='user-intro'>
        introduce yourself
        <v-icon x-small class='pencil-icon'>mdi-pencil</v-icon>
      </small>
      <div class='d-flex mb-6 chips'>
        <v-chip x-small class='chip'>age</v-chip>
        <v-chip x-small class='chip'>+occupation</v-chip>
      </div>
    </div>
    <div class='user-info-3'>
      <div class='follow-others'>
        <div>3</div>
        <div>关注</div>
      </div>
      <div class='fans'>
        <div>3</div>
        <div>粉丝</div>
      </div>
      <div class='got-likes-collect'>
        <div>3</div>
        <div>获赞与收藏</div>
      </div>
    </div>
    <ProfileTabs />
    <BottomNav />
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from '@/components/layouts/BottomNav.vue';
import ProfileDrawer from '@/components/profiles/ProfileDrawer.vue';
import ProfileTabs from '@/components/profiles/ProfileTabs.vue';
import CharacterAvatar from '@/components/CharacterAvatar.vue';

export default {
  name: 'MyProfile',
  data: () => ({
    drawer: false,
    group: null,
    tags: {
      name: '汤姆',
      id: '小红书id:',
      ip: 'IP:',
    },
  }),
  components: {
    BottomNav,
    ProfileDrawer,
    CharacterAvatar,
    ProfileTabs,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.profile {
  overflow: hidden;
}

.user-info {
  margin-top: 15px;
  min-width: 100px !important;
  padding: 15px 15px 5px 20px;
  font-size: 10px;
  line-height: 0.3em;
  border: none !important;
}

.chips {
  margin: 5px 5px 0 -2px;
}

.user-intro {
  margin-left: 0;
}

.follow-others {
  flex: 1;
}

.fans {
  flex: 1;
}

.got-likes-collect {
  flex: 2;
}

.user-info-2 {
  min-width: 120px;
  margin: -20px 0 -5px 45px;
}

.avatar {
  margin: 28px 0 0 40px;
}

.wrapper-user-info {
  height: 70px;
}

.user-info > .pa-2:first-child {
  font-size: 15px;
}

.user-info > .pa-2:nth-child(3) {
  margin-top: -5px;
}

.pencil-icon {
  margin-left: 3px;
  margin-top: -2px;
}

.user-info-3 {
  width: 216px;
  min-width: 216px;
  height: 80px;
  padding: 20px 0 0 35px;
  font-size: 11px;
  text-align: center;
  display: flex;
}

.user-info-3 > div {
  margin-right: 5px;
}
</style>
