<template>
  <div id="footer">
    <el-divider></el-divider>
    <el-row>
      <!-- 其他平台 -->
      <el-col class="hidden-sm-and-down" :lg="{span:5,offset:1}" :md="{span:5, offset: 1}">
        <div class="otherplant">
          <h4>其他平台</h4>
          <img src="@/assets/img/footer/juejin.svg" alt />
          <h5 class="title">
            <a href="https://juejin.im/user/5e327c895188252617343d95/posts">掘金</a>
          </h5>
          <img src="@/assets/img/footer/github.svg" alt />
          <h5 class="title">
            <a href="https://github.com/shitshitme">GitHub</a>
          </h5>
        </div>
      </el-col>
      <!-- 友情链接 -->
      <el-col
        class="hidden-sm-and-down"
        :lg="{span:5,offset:1}"
        :md="{span:5, offset: 1}"
        :sm="{span:5, offset: 1}"
      >
        <div class="otherlink">
          <h4>友情链接</h4>
          <div class="link">
            <img src="@/assets/img/footer/link.svg" alt />
            <h5 class="title">
              <a href>ZUST 533 博客</a>
            </h5>
            <img src="@/assets/img/footer/link.svg" alt />
            <h5 class="title">
              <a href="https://www.liaoxuefeng.com/">廖雪峰的博客</a>
            </h5>
          </div>
        </div>
      </el-col>
      <!-- 联系方式 -->
      <el-col
        class="hidden-sm-and-down"
        :lg="{span:5,offset:1}"
        :md="{span:5, offset: 1}"
        :sm="{span:5, offset: 1}"
      >
        <div class="connection">
          <h4>联系方式</h4>
          <div class="way">
            <img src="@/assets/img/footer/qq.svg" alt />
            <h5 class="title">Wechat: v31426535</h5>
          </div>
          <div class="way">
            <img src="@/assets/img/footer/wechat.svg" alt />
            <h5 class="title">QQ: 1305681751</h5>
          </div>
          <div class="way">
            <img src="@/assets/img/footer/qqmail.svg" alt />
            <h5 class="title">Mail: haagshg@qq.com</h5>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="copyright">
      <h4>© 2019 - 2020 WrongQuen · Wu 版权所有</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.copyright {
  margin-top: 50px;
  text-align: center;
  color: #565a5f;
}
.title {
  margin-top: 5px;
}
a {
  text-decoration: none;
  color: #565a5f;
}
a:hover {
  color: #409eff;
}
</style>