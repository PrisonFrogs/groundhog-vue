<template>
  <div class="full-screen-loading">
    <img src="@/assets/gifs/cat-waving.gif" class="center-image" alt="">
  </div>
</template>

<style scoped>
.full-screen-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
}
.center-image {
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  position: fixed;
}
</style>
