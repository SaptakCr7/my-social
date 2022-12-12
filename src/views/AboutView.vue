<script>
import Navbar from "../components/Navbar.vue";
import ModalSearch from "../components/ModalSearch.vue";
import ModalSocial from "../components/ModalSocial.vue";
import ModalApi from "../components/ModalApi.vue";
import ModalPost from "../components/ModalPost.vue";

export default {
  components: {
    Navbar,
    ModalSearch,
    ModalPost,
    ModalSocial,
    ModalApi,
  },
};
</script>

<template>
  <Navbar />
  <ModalSocial />
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
<style scoped>
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
