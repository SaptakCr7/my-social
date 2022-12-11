<script setup>
import Navbar from "../components/Navbar.vue";
import ModalSearch from "../components/ModalSearch.vue";
import ModalSocialVue from "../components/ModalSocial.vue";
import ModalApi from "../components/ModalApi.vue";
import ModalPost from "../components/ModalPost.vue";
ModalPost;
</script>

<template>
  <Navbar />
  <ModalSocialVue />
  <div class="main">
    <div class="list">
      <ModalSearch />
      <ModalApi />
    </div>
    <div class="post">
      <ModalPost />
      <!-- <ModalPostList /> -->
    </div>
  </div>
</template>
<style>
.main {
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post {
  width: 60%;
  display: flex;
  flex-direction: column;
}
</style>
