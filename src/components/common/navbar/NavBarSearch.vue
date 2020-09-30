<template>
  <div id="nav-bar-search">
    <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: "NavBarSearch",
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style scoped>
#nav-bar-search {
  text-align: center;
}
.input-with-select {
  margin-top: 8px;
  border-radius: 25px;
}
</style>