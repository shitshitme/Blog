<template>
  <div id="show-card-item">
    <div class="item">
      <slot name="total"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowCardItem"
};
</script>

<style scoped>
.item div div {
  float: left;
  width: 49%;
  text-align: center;
  color: #565a5f;
  font-size: 22px;
}
.item div :nth-child(-n + 2) {
  margin-top: 25px;
  border-top: 1px solid #eceff2;
}
.item div :nth-child(2n-1) {
  border-right: 1px solid #eceff2;
}
</style>