<template>
  <div id="show-card-header">
    <div class="qrcode">
      <slot name="header-qrcode"></slot>
    </div>
    <div class="text">
      <slot name="header-text"></slot>
    </div>
    <div class="reward">
      <slot name="header-reward"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCardHeader"
};
</script>

<style scoped>
#show-card-header {
  text-align: center;
  margin: 0 auto;
  color: #565a5f;
}
.qrcode img {
  height: 130px;
  margin-top: 10px;
}
.text div :nth-child(1) {
  padding-top: 10px;
  font-size: 25px;
  font-weight: 700;
}
.text div :nth-child(2) {
  padding-top: 8px;
  font-weight: 100;
}
.text div :nth-child(3) {
  color: #9a9ea3;
}
.text div :nth-child(3) i {
  font-weight: 100;
  margin-right: 5px;
}
.text div :nth-child(4) {
  font-size: 12px;
  margin-top: 20px;
}
.reward a {
  display: inline-block;
  text-decoration: none;
  margin-top: 20px;
  width: 130px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  background-color: #38b7ea;
  color: #ffffff;
  border-radius: 20px;
}
</style>