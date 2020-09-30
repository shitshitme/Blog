<template>
  <div id="home">
    <el-row type="flex">
      <!-- 资料展示卡 -->
      <el-col class="hidden-md-and-down" :xl="{span:5, offset:1}" :lg="{span:5, offset:1}">
        <MainShowCard class="home-show-card"></MainShowCard>
      </el-col>
      <!-- 博客内容 -->
      <el-col :xl="{span:10}" :lg="{span:10}" :md="{span:15}" :sm="{span:23}" :xs="{span:23}">
        <MainTimeLine class="home-time-line"></MainTimeLine>
      </el-col>
      <!-- 左侧栏 -->
      <el-col
        class="hidden-sm-and-down"
        :xl="{span:6, offset:1}"
        :lg="{span:6, offset:1}"
        :md="{span:7, offset:1}"
      >
        <MainCategory class="home-category"></MainCategory>
      </el-col>
    </el-row>
    <BackTop></BackTop>
    <Footer class="home-footer"></Footer>
  </div>
</template>

<script>
import MainTimeLine from "./childComps/maintimeline/MainTimeLine";
import MainShowCard from "./childComps/mainshowcard/MainShowCard";
import MainCategory from "./childComps/maincategory/MainCategory";
import Footer from "./childComps/footer/Footer";
import BackTop from "components/common/backtop/BackTop";

export default {
  name: "Home",
  components: {
    MainShowCard,
    MainTimeLine,
    MainCategory,
    Footer,
    BackTop
  }
};
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .home-category {
    display: none;
  }
}
.home-show-card {
  margin-top: 50px;
}
.home-time-line {
  margin-top: 50px;
}
.home-category {
  margin-top: 50px;
}
.home-footer {
  margin-top: 50px;
}
</style>