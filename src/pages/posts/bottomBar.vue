<template>
  <div class="bottom-bar">
    <v-toolbar class="bottom-bar" color="grey lighten-5" flat>
      <v-row>
        <div>
          <v-text-field
            v-model="formData.content"
            placeholder="Reply something nicely"
            prepend-inner-icon="mdi-pencil-outline"
            class="pl-0"
            rounded
          ></v-text-field>
        </div>
        <div cols="2">
          <div class="font-weight-bold icon-text">
            <v-icon>
              mdi-heart-outline
            </v-icon>
            123
          </div>
        </div>
        <div cols="2">
          <div class="font-weight-bold icon-text">
            <v-icon>
              mdi-star-check-outline
            </v-icon>
            2
          </div>
        </div>
        <div cols="2">
          <div class="font-weight-bold icon-text">
            <v-icon>
              mdi-message-outline
            </v-icon>
            64
          </div>
        </div>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'PostBottomBar',
  data() {
    return {
      formData: {
        content: '',
      },
    };
  },
};
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
}
.icon-text {
  font-size: 0.8rem;
  margin-right: 0.5rem;
  display: inline;
}
</style>
