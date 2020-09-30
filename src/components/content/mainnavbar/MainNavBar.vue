<template>
  <div id="main-nav-bar">
    <!-- 导航栏总组件 -->

    <el-row type="flex">
      <NavBar>
        <!-- Logo -->
        <el-col
          :xl="{span:4,offset:1}"
          :lg="{span:5,offset:1}"
          :md="{span:6,offset:1}"
          :sm="{span:6,offset:9}"
          :xs="{span:6,offset:1}"
        >
          <NavBarLogo path="/home" class="item-mainnavbar"></NavBarLogo>
        </el-col>
        <!-- 主页 -->
        <el-col
          class="hidden-sm-and-down"
          :xl="{span:2,offset:0}"
          :lg="{span:2,offset:0}"
          :md="{span:2,offset:1}"
        >
          <NavBarItem path="/home" class="item-mainnavbar">
            <div slot="item-text">看主页</div>
          </NavBarItem>
        </el-col>
        <!-- 写博客 -->
        <el-col
          class="hidden-sm-and-down"
          :xl="{span:2,offset:0}"
          :lg="{span:2,offset:0}"
          :md="{span:2,offset:0}"
        >
          <NavBarItem path="/write" class="item-mainnavbar">
            <div slot="item-text">写博客</div>
          </NavBarItem>
        </el-col>
        <!-- 关于我 -->
        <el-col
          class="hidden-sm-and-down"
          :xl="{span:2,offset:0}"
          :lg="{span:2,offset:0}"
          :md="{span:2,offset:0}"
        >
          <NavBarDialog></NavBarDialog>
        </el-col>
        <!-- 搜索框 -->
        <el-col
          class="hidden-sm-and-down"
          :xl="{span:6,offset:8}"
          :lg="{span:6,offset:5}"
          :md="{span:6,offset:1}"
        >
          <NavBarSearch></NavBarSearch>
        </el-col>
        <!-- 头像 -->
        <el-col
          class="hidden-sm-and-down hidden-lg-and-up"
          :xl="{span:2,pull:1}"
          :lg="{span:2,pull:1}"
          :md="{span:2,offset:1}"
        >
          <NavBarAvatar></NavBarAvatar>
        </el-col>
      </NavBar>
    </el-row>

    <!-- 第二行 -->
    <el-row>
      <el-col class="hidden-md-and-up">
        <NavBarText></NavBarText>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <NavBarExtra></NavBarExtra>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import NavBarItem from "components/common/navbar/NavBarItem";
import NavBarLogo from "components/common/navbar/NavBarLogo";
import NavBarSearch from "components/common/navbar/NavBarSearch";
import NavBarAvatar from "components/common/navbar/NavBarAvatar";
import NavBarText from "components/common/navbar/NavBarText";
import NavBarExtra from "components/common/navbar/NavBarExtra";
import NavBarDialog from "components/common/navbar/NavBarDialog";

export default {
  name: "MainNavBar",
  components: {
    NavBar,
    NavBarItem,
    NavBarLogo,
    NavBarSearch,
    NavBarAvatar,
    NavBarText,
    NavBarExtra,
    NavBarDialog
  }
};
</script>

<style scoped>
.item-mainnavbar:hover {
  cursor: pointer;
}
.item-mainnavbar div:hover {
  color: #38b7ea;
}
.style-extra {
  width: 100vw;
  background-color: #ffffff;
}
</style>