<template>
  <div id="main-show-card">
    <ShowCard>
      <ShowCardHeader>
        <div slot="header-qrcode">
          <img src="@/assets/img/showcard/raspberry-pi.svg" />
        </div>
        <div slot="header-text">
          <div>Wu · WrongQuen</div>
          <div>{{introduction.signature}}</div>
          <div>
            <i class="el-icon-map-location"></i>
            <span>乌斯怀亚 · 阿根廷</span>
          </div>
        </div>
        <div slot="header-reward">
          <a @click="centerDialogVisible = true">打 赏</a>
          <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
            <h5>比起我，他们更需要你的帮助</h5>
            <div>
              <i class="el-icon-bottom"></i>
              <i class="el-icon-bottom"></i>
              <i class="el-icon-bottom"></i>
            </div>
            <el-link
              type="primary"
              href="http://www.hhax.org/nv.html?nid=dc5b5680-2741-4f90-996e-5043910691c3"
            >链接: 韩红爱心基金会</el-link>
            <span slot="footer" class="dialog-footer">
              <el-button @click="centerDialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </ShowCardHeader>
      <ShowCardItem>
        <div slot="total">
          <div>博客</div>
          <div>标签</div>
          <div>10</div>
          <div>10</div>
        </div>
      </ShowCardItem>
    </ShowCard>
  </div>
</template>

<script>
import ShowCard from "components/common/showcard/ShowCard";
import ShowCardHeader from "components/common/showcard/ShowCardHeader";
import ShowCardItem from "components/common/showcard/ShowCardItem";

export default {
  name: "MainShowCard",

  components: {
    ShowCard,
    ShowCardHeader,
    ShowCardItem
  },

  data() {
    return {
      introduction: {
        type: String,
        signature: "人在America，刚下Air，谢邀"
      },
      centerDialogVisible: false
    };
  }
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #38b7ea;
}
.el-icon-bottom {
  color: red;
  font-size: 20px;
}
</style>