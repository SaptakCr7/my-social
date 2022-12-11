<script>
export default {
  data() {
    return {
      body: "",
      date: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.body == "") {
        alert("Please type something to post");
        return;
      }
      const current = new Date();
      const dateNow = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()} - ${current.getSeconds() + " secs ago"}`;

      let myPost = {
        body: this.body,
        date: dateNow,
      };
      this.$emit("post-submitted", myPost);

      this.body = "";
    },
  },
};
</script>
<template>
  <form class="post-form" @submit.prevent="onSubmit">
    <h3>Create a post</h3>
    <textarea id="body" v-model="body"></textarea>
    <input class="button" type="submit" value="Post" />
  </form>
</template>
<style scoped>
textarea {
  width: 95%;
  height: 100px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 1rem;
}
.button {
  margin-right: 30px;
  background-color: #010101;
  border-radius: 1rem;
  font-size: 18px;
  width: 180px;
  font-weight: 600;
  max-height: 75px;
  color: white;
  padding: 15px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.post-form {
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px solid #d8d8d8;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}
</style>
