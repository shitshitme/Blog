<template>
  <div id="write">
    <h2 class="tip">Write Your Blog Down</h2>

    <!-- 标题 -->
    <div id="write-title">
      <h2>标题</h2>
      <el-input
        class="title"
        type="text"
        placeholder="请输入内容"
        v-model="blog.title"
        maxlength="30"
        suffix-icon="el-icon-edit"
      ></el-input>
      <el-divider></el-divider>
    </div>

    <!-- 类型 -->
    <div id="write-category">
      <h2>类型</h2>
      <div class="category">
        <el-radio-group v-model="blog.category">
          <el-radio :label="type[0]" name="type[0]"></el-radio>
          <el-radio :label="type[1]" name="type[1]"></el-radio>
          <el-radio :label="type[2]" name="type[2]"></el-radio>
        </el-radio-group>
      </div>
    </div>

    <!-- 标签 -->
    <div id="write-label">
      <el-divider></el-divider>
      <h2>标签</h2>
      <el-input
        class="label"
        v-model="blog.label"
        placeholder="请输入标签名字"
        suffix-icon="el-icon-price-tag"
      ></el-input>
    </div>

    <!-- 正文 -->
    <div id="write-content">
      <el-divider></el-divider>
      <h2>正文</h2>
      <div class="content">
        <el-input
          class="word"
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 200}"
          placeholder="请输入内容"
          v-model="blog.content"
        ></el-input>
        <div class="button">
          <el-button class="fix" type="warning" plain>修改</el-button>
          <el-button class="commit" type="success" @click="commit" plain>提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { PostBlog } from "network/write";

export default {
  name: "Write",
  data() {
    return {
      blog: {
        title: "",
        category: "",
        label: "",
        content: ""
      },
      submtied: false,
      type: ["开发日记", "小总结", "日常"]
    };
  },
  methods: {
    commit() {
      PostBlog()
        .then(data => {
          data = this.blog;
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
      // PostBlog()
      //   .then(res => {
      //     console.log(res);
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  }
};
</script>

<style scoped>
#write {
  width: 42%;
  margin: 0 auto;
}
.tip {
  text-align: center;
  border-bottom: 2px solid grey;
  padding-bottom: 10px;
}
.title {
  font-size: 20px;
}
.category {
  margin-top: 20px;
}
.label {
  width: 100%;
  font-size: 20px;
}
.content {
  width: 100%;
}
.word {
  font-size: 18px;
}
.button {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
}
.item-button {
  font-size: 20px;
}
</style>