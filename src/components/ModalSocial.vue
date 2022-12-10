<script>
export default {
  data() {
    return {
      name: "John doe",
      image: "https://robohash.org/25?set=set5",
      bio: "Hi there! I am John Doe, a programmer, freelancer and software Developer.",
      totalPosts: 164,
      followers: 1,
      following: 285,
      isFollowing: true,
      posts: [],
    };
  },
  methods: {
    followUser() {
      this.isFollowing = !this.isFollowing;
      if (this.isFollowing) {
        this.followers += 1;
      } else {
        this.followers -= 1;
      }
    },
  },
  computed: {
    buttonText() {
      return this.isFollowing ? "Unfollow" : "Follow";
    },
    buttonText2() {
      return this.isFollowing ? "Following" : "Unfollowed";
    },
  },
};
</script>

<template>
  <div class="profile-display">
    <div class="profile-container">
      <div class="profile-image">
        <!-- Profile Image goes here -->
        <img v-bind:src="image" alt="my profile image" />
      </div>
      <div class="profile-info">
        <h1>{{ name }}</h1>
        <div class="stats">Posts: {{ totalPosts }}</div>
        <div class="stats">Followers: {{ followers }}</div>
        <div class="stats">Following: {{ following }}</div>
        <p>{{ bio }}</p>
        <button
          class="btn btn-info"
          :isFollowing="followUser"
          v-text="buttonText2"
        ></button>
        <button
          class="btn btn-info"
          @click="followUser"
          v-text="buttonText"
        ></button>
        <!-- <post-list
          v-if="posts.length"
          :posts="posts"
          @delete-post="deletePost"
        ></post-list>
        <post-form @post-submitted="addPost"></post-form> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
img {
  margin: 40px;
  margin-left: 133px;
  padding: 10px;
  border-radius: 50%;
  -webkit-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 20px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 20px -12px rgba(0, 0, 0, 0.57);
}
.profile-display {
  margin: auto;
}
.btn {
  border-radius: 1rem;
  font-size: 18px;
  margin-right: 5px;
  width: 120px;
  color: rgb(0, 0, 0);
  padding: 12px;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.profile-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-info {
  width: 50%;
  border-radius: 5rem;
}
.stats {
  background-color: #010101;
  margin-right: 5px;
  border-radius: 1rem;
  font-size: 18px;
  font-weight: 600;
  color: white;
  padding: 15px;
  display: inline-flex;
  text-align: center;
}
</style>
