<template>
  <div id="nav-bar-logo" @click="itemClick">
    <img src="@/assets/img/navbar/3DGlass.svg" />
    <div class="text-logo">Wu · WrongQuen</div>
  </div>
</template>

<script>
export default {
  name: "NavBarLogo",

  props: {
    path: String
  },

  methods: {
    itemClick() {
      this.$router.push(this.path).catch(err => {});
      console.log("this is logo");
    }
  }
};
</script>

<style scoped>
#nav-bar-logo {
  line-height: 49px;
}

#nav-bar-logo img {
  width: 45px;
  height: 45px;
  margin-top: 2px;
}

#nav-bar-logo div {
  position: relative;
  top: -65px;
  left: 60px;
  font-family: Museo Slab;
  font-size: 20px;
  font-weight: 600;
}
.text-logo {
  max-width: 180px;
}
</style>