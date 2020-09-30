<template>
  <div id="time-line-item">
    <div class="block">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top" class>
          <el-card class="card">
            <a href="#">
              <h2>SSH原理与使用详解</h2>
            </a>
            <div class="label">
              <i class="el-icon-date"></i>
              <span>时间</span>
              <i class="el-icon-folder-opened"></i>
              <span>类型</span>
              <i class="el-icon-discount"></i>
              <span>标签</span>
            </div>
            <div class="content">
              <h4>Ubuntu笔记本电脑使用SSH连接Arch树莓派</h4>
              <el-divider class="borderline"></el-divider>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top" class>
          <el-card class="card">
            <a href="#">
              <h2>还在使用"../../../../../../../../"?</h2>
            </a>
            <div class="label">
              <i class="el-icon-date"></i>
              <span>时间</span>
              <i class="el-icon-folder-opened"></i>
              <span>类型</span>
              <i class="el-icon-discount"></i>
              <span>标签</span>
            </div>
            <div class="content">
              <h4>创建vue.config.js文件给文件起别名</h4>
              <el-divider></el-divider>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeLineItem"
};
</script>

<style scoped>
#time-line-item {
  width: 100%;
}
.card {
  border-radius: 20px;
}
.card a {
  text-decoration: none;
}
.card h2 {
  color: #565a5f;
}
.card a h2:hover {
  color: #38b7ea;
}
.label :nth-child(n + 0) {
  font-size: 16px;
  padding-left: 3px;
  color: #565a5f;
}
.el-icon-folder-opened {
  margin-left: 8px;
}
.el-icon-discount {
  margin-left: 8px;
}
.content {
  color: #565a5f;
}
.borderline {
  background-color: #dcdfe6;
  font-size: 14px;
}
</style>