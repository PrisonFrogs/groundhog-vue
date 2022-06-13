<template>
  <div>
    <v-container class="mt-16 pt-10">
      <v-card height="40vh">
        <v-tabs centered>
          <v-tab>Email</v-tab>
        </v-tabs>
        <v-container class="pt-12">
          <v-text-field v-model="formData.email" label="email" solo></v-text-field>
          <v-text-field
            v-model="formData.passw"
            type="password"
            label="password"
            solo
          ></v-text-field>
          <v-btn color="primary" @click="submit" large block> Login </v-btn>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import fakeLoading from '@/utils/fakeLoading';

export default {
  name: 'LoginIndex',
  data() {
    return {
      formData: {
        email: '',
        passw: '',
      },
    };
  },
  created() {
    // if (this.loginState) {
    fakeLoading(3000, () => {
      this.$router.push('/');
    });
  },
  computed: {
    ...mapGetters(['loginState', 'currentUser', 'loginState']),
  },
  methods: {
    ...mapActions(['login', 'showSucessToast']),
    async submit() {
      await this.login(this.formData);

      this.showSucessToast(`Welcome ${this.currentUser.nickname}!`);

      // global loading
      fakeLoading(1, () => {
        this.$router.push('/');
      });
    },
  },
};
</script>
