<template>
  <div class='profile'>
    <ProfileDrawer />
    <div class='wrapper-user-info'>
      <CharacterAvatar class='avatar' />
      <div class='user-info'>
        <p>汤姆</p>
        <p>小红书id:</p>
        <p>IP:</p>
      </div>
      <!-- <div class='user-info-2'>
        introduce yourself
        <v-icon>mdi-change</v-icon>
      </div> -->
    </div>
    <BottomNav />
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from '@/components/layouts/BottomNav.vue';
import ProfileDrawer from '@/components/ProfileDrawer.vue';
import CharacterAvatar from '@/components/CharacterAvatar.vue';

export default {
  name: 'MyProfile',
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    BottomNav,
    ProfileDrawer,
    CharacterAvatar,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.avatar {
  margin: 10px 0 0 40px;
}

.wrapper-user-info {
  height: 70px;
  display: grid;
  grid-template-columns: 25% 50%;
  grid-auto-columns: minmax(200px, auto);
}

.user-info {
  margin-top: 5%;
  padding: 15px 15px 5px 20px;
  font-size: 8px;
  overflow: hidden;
  display: grid;
  grid-auto-rows: 40% 30% 30%;
  grid-row-gap: 0.3em;
  line-height: 0.3em;
  justify-items: stretch;
}

.user-info > p:first-child {
  font-size: 15px;
  font: bold;
}

.user-info-2 {
  margin: 5% 0 0 12%;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
