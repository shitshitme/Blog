<template>
  <div id="app">
    <MainNavBar class="mainnavbar"></MainNavBar>
    <router-view />
  </div>
</template>

<script>
import MainNavBar from "./components/content/mainnavbar/MainNavBar";

export default {
  name: "app",
  components: {
    MainNavBar
  }
};
</script>

<style scoped>
@import "./assets/css/base.css";
</style>
