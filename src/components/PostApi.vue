<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Employee List",

  mounted() {
    Vue.axios.get("https://jsonplaceholder.typicode.com/posts");
  },
};
</script>

<template>
  <div>
    <h1>Employee List</h1>
  </div>
</template>
