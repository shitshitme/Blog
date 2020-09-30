<template>
  <div id="category-type">
    <div class="title">分类</div>
    <div class="doc">
      <a href="#">
        <i class="el-icon-s-platform"></i>
        <el-divider class="text">
          <div>开发日记</div>
        </el-divider>
      </a>
      <a href="#">
        <i class="el-icon-video-camera-solid"></i>
        <el-divider class="text">
          <div>小总结</div>
        </el-divider>
      </a>
      <a href="#">
        <i class="el-icon-camera-solid"></i>
        <el-divider class="text">
          <div>日常</div>
        </el-divider>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryType"
};
</script>

<style scoped>
#category-type {
  margin-top: 50px;
}
.title {
  font-size: 20px;
  font-weight: 600;
  color: #565a5f;
}
.doc {
  margin-top: 20px;
}
.doc a {
  text-decoration: none;
  color: black;
}
.doc a:hover {
  color: #38b7ea;
}
.doc i:nth-of-type(n + 0) {
  font-size: 40px;
}
.el-icon-s-platform {
  margin: 0 auto;
}
.text div {
  font-weight: 700;
  background-color: #f6f6f6;
  color: #565a5f;
}
.text div:hover {
  color: #38b7ea;
}
</style>