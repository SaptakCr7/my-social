<script>
export default {
  // props: ["post"],
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<template>
  <div v-for="post in posts" :key="post.id" class="post">
    <table class="table">
      <tbody>
        <tr>
          <td>{{ post.id }}</td>
          <td>{{ post.name }}</td>
          <td>{{ post.username }}</td>
          <td>{{ post.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
.table {
  display: flex;
}
</style>
