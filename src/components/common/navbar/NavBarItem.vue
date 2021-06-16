<template>
  <div id="nav-bar-item" @click="itemClick">
    <slot name="item-text"></slot>
    <slot name="item-about"></slot>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    path: String
  },
  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => {});
      console.log("this is item");
    }
  }
};
</script>

<style scoped>
#nav-bar-item {
  text-align: center;
  height: 49px;
  line-height: 49px;
  font-family: fantasy;
  font-size: 16px;
  color: #4e5661;
}
</style>