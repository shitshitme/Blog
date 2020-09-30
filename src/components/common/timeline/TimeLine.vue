<template>
  <div id="time-line">
    <TimeLineItem></TimeLineItem>
    <Page class="timeline-page" :total="100"></Page>
  </div>
</template>

<script>
import TimeLineItem from "./TimeLineItem";
import Page from "./Page";

export default {
  name: "TimeLine",
  components: {
    TimeLineItem,
    Page
  }
};
</script>

<style scoped>
.timeline-page {
  margin-top: 30px;
  text-align: center;
}
</style>