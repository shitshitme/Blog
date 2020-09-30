<template>
  <div id="nav-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
#nav-bar {
  width: 100vw;
  height: 50px;
  /* position: fixed; */
  top: 0;
  background-color: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>