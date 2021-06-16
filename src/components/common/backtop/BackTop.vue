<template>
  <div>
    <div @click="backTop" v-if="isShow">
      <img src="@/assets/img/backTop/BackTop.svg" class="backtop" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    backTop() {
      scrollTo(0, 0);
      this.isShow = false;
    },
    scrollToTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 500) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
};
</script>

<style scoped>
.backtop {
  display: inline-block;
  position: fixed;
  width: 4%;
  right: 150px;
  top: 80%;
  z-index: 999;
}
</style>
