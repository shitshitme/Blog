<template>
  <div id="nav-bar-avatar">
    <el-popover
      placement="bottom-start"
      title="温馨提示"
      width="200"
      trigger="hover"
      close-delay="0"
      content="下次一定,下次一定"
    >
      <el-button slot="reference" class="avatar">
        <img src="@/assets/img/showcard/raspberry-pi.svg" />
      </el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "NavBarAvatar"
};
</script> 

<style scoped>
#nav-bar-avatar img {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
.el-icon-caret-bottom {
  margin-left: -5px;
  vertical-align: super;
  font-size: 22px;
}
.avatar {
  padding: 0;
  width: 50px;
  border: none;
}
.avatar:hover {
  background-color: #ffffff;
}
.avatar:visited {
  background-color: #ffffff;
}
</style>