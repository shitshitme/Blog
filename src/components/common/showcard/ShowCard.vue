<template>
  <div id="showcard">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ShowCard"
};
</script>

<style scoped>
#showcard {
  /* width: 20%; */
  height: 400px;
  background-color: #ffffff;
  border-radius: 6%;
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.1);
}
</style>