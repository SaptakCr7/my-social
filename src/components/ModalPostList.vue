<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    totalPosts: {
      type: Number,
      required: false,
    },
  },
  methods: {
    deletePost() {
      this.posts(this.posts.indexOf(1));
      this.$emit("delete-post");
    },
  },
};
</script>
<template>
  <div v-for="(post, index) in posts" :key="index" class="post-container">
    <h3>{{ post.body }}</h3>
    <span>posted {{ post.date }}</span>
    <button @click="deletePost" class="delButton">Delete</button>
  </div>
</template>
<style>
.post-container {
  width: 90%;
  padding: 10px 20px 20px 20px;
  border-radius: 20px;
  margin-top: 15px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);

  border: 2px solid #d8d8d8;
}

.delButton {
  float: right;
  background-color: red;
  color: white;
  border-radius: 9px;
  padding: 5.5px;
  border: none;
}
</style>
