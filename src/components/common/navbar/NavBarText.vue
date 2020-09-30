<template>
  <div id="nav-bar-text">
    <div class="wrapper">
      <NavBarItem path="/home" class="item-navbartext">
        <div slot="item-text">看主页</div>
      </NavBarItem>
      <NavBarItem path="/write" class="item-navbartext">
        <div slot="item-text">写博客</div>
      </NavBarItem>
      <NavBarDialog></NavBarDialog>
    </div>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem";
import NavBarDialog from "./NavBarDialog";

export default {
  name: "NavBarText",
  components: {
    NavBarItem,
    NavBarDialog
  }
};
</script>

<style scoped>
#nav-bar-text {
  padding-top: 10px;
  border-top: 1px solid #f6f6f6;
  background-color: #ffffff;
}
.wrapper {
  display: flex;
  justify-content: space-around;
}
.item-navbartext:hover {
  cursor: pointer;
  color: #38b7ea;
}
</style>