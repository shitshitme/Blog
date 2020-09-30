<template>
  <div id="nav-bar-dialog">
    <div type="text" @click="centerDialogVisible = true" class="title">关于我</div>

    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" :center="true">
      <h3 class="content">好奇心会害死猫</h3>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "NavBarDialog",
  data() {
    return {
      centerDialogVisible: false
    };
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  height: 49px;
  line-height: 49px;
  font-family: fantasy;
  font-size: 16px;
  color: #4e5661;
}
.title:hover {
  cursor: pointer;
  color: #38b7ea;
}
.content {
  margin: 0 auto;
}
</style>