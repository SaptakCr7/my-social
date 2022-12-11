<script>
export default {
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
          <th scope="row">{{ post.id }}</th>
          <td>{{ post.name }}</td>
          <td>{{ post.username }}</td>
          <td>{{ post.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
.table {
  margin: auto;
  width: 55%;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.th {
  margin: auto;
  display: flex;
}
.tr {
  margin: 10px;
}
</style>
