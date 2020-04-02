<template>
  <div>
    <div class="tabs">
      <!-- Tab Menu -->
      <ul class="tabs">
        <li v-for="tab in tabs" :key="tab">
          <a href="#">{{ tab.name }}</a>
        </li>

        <li>
          <a href="#">test</a>
        </li>
      </ul>
    </div>
    <tab />
  </div>
</template>

<script>
import tab from "@/components/tab";

export default {
  name: "tabs",

  components: {
    tab
  },

  data() {
    return {
      tabs: []
    };
  },

  created() {
    this.tabs = this.$children;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
