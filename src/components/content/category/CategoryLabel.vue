<template>
  <div id="category-label">
    <div class="title">标签云</div>
    <div class="label-cloud">
      <div class="cloud">
        <a href="#">Vue.js</a>
        <a href="#">Webpack</a>
        <a href="#">JavaScipt</a>
        <a href="#">Linux</a>
        <a href="#">Nginx</a>
        <a href="#">响应式布局</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryLabel"
};
</script>

<style scoped>
#category-label {
  width: inherit;
  margin-top: 60px;
}
.title {
  font-size: 20px;
  font-weight: 600;
  color: #565a5f;
}
.cloud {
  display: inline;
  list-style-type: none;
}
.cloud a {
  padding-left: 8px;
}
.cloud a {
  text-decoration: none;
  color: lightslategrey;
}
.cloud a:hover {
  color: #38b7ea;
}

.cloud a:nth-of-type(2n + 1) {
  font-size: 10px;
  font-weight: 400;
}
.cloud a:nth-of-type(4n + 3) {
  font-size: 25px;
  font-weight: 100;
}
.cloud a:nth-of-type(5n - 3) {
  font-size: 14px;
}
</style>