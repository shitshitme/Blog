<template>
  <div id="category">
    <CategoryBoard></CategoryBoard>
    <CategoryLabel></CategoryLabel>
    <CategoryType></CategoryType>
  </div>
</template>

<script>
import CategoryBoard from "./CategoryBoard";
import CategoryLabel from "./CategoryLabel";
import CategoryType from "./CategoryType";

export default {
  name: "Category",
  components: {
    CategoryBoard,
    CategoryLabel,
    CategoryType
  }
};
</script>

<style scoped>
</style>