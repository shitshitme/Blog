<template>
  <div id="category-board">
    <div class="label">
      <i class="el-icon-message-solid"></i>
    </div>
    <div class="progress-bar">
      <h4>IF READ IT</h4>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="25"></el-progress>
      <h4>IF WRITE IT</h4>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="50" status="success"></el-progress>
      <h4>IF LEARN IT</h4>
      <el-progress :text-inside="true" :stroke-width="22" :percentage="75" status="warning"></el-progress>
      <h4>WILL GET IT</h4>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="100" status="exception"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryBoard"
};
</script>

<style scoped>
#category-board {
  background-color: #ffffff;
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.1);
}
.label i {
  margin-top: 7px;
  margin-bottom: 10px;
  margin-left: 5px;
  font-size: 30px;
}
.progress-bar {
  padding-left: 8px;
  padding-bottom: 12px;
  padding-right: 8px;
}
.notes-style {
  padding-left: 5px;
}
</style>