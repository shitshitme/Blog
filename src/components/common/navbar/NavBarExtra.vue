<template>
  <div id="nav-bar-extra">
    <div class="wrapper">
      <el-row type="flex">
        <el-col class="hidden-md-and-up" :sm="{span:15,offset:1}" :xs="{span:15,offset:1}">
          <NavBarSearch></NavBarSearch>
        </el-col>
        <el-col class="hidden-md-and-up" :sm="{span:2,offset:6}" :xs="{span:2,offset:5}">
          <el-popover
            placement="bottom-start"
            title="温馨提示"
            width="200"
            trigger="hover"
            close-delay="0"
            content="下次一定,下次一定"
          >
            <el-button slot="reference" class="avatar">
              <NavBarAvatar></NavBarAvatar>
            </el-button>
          </el-popover>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import NavBarSearch from "./NavBarSearch";
import NavBarAvatar from "./NavBarAvatar";

export default {
  name: "NavBarExtra",
  components: {
    NavBarSearch,
    NavBarAvatar
  }
};
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .wrapper {
    background-color: #ffffff;
  }
}
.wrapper {
  padding-top: 25px;
  padding-bottom: 15px;
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