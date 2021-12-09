<template>
  <div class="userDataContainer">
    <h2>User Info</h2>

    <div class="card" style="width: 18rem;">
    <img :src="userData.avatar_url" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{userData.login}}</h5>
      <p class="card-text">Followers: {{userData.followers}}</p>
      <p class="card-text">Plan: {{userData.plan && userData.plan.name}}</p>
    </div>
  </div>
  </div>
</template>

<style scoped>
  .userDataContainer {
    margin-top: 20px;
  }
</style>

<script>
import { octokitMixin } from "../mixins/octokitMixin";

export default {
  name: "GitHubUser",
  data() {
    return {
      userData: {},
    };
  },
  mixins: [octokitMixin],
  //Licycle method like oncreate in android etc
  //Using same mixin to make a request at user endpoint to get user data
  async mounted() {
    const octokit = this.createOctokitClient();
    const { data: userData } = await octokit.request("/user");
    this.userData = userData;

    console.log(userData)
  },
  methods: {
    saveToken() {},
  },
};
</script>

// scoped keyword means style only applies to this component
<style scoped>
#avatar {
  width: 50px;
  height: 50px;
}
</style>

<!-- <ul>
      <li>
        <img :src="userData.avatar_url" id="avatar" />
      </li>
      <li>username: {{userData.login}}</li>
      <li>followers: {{userData.followers}}</li>
      <li>plan: {{userData.plan && userData.plan.name}}</li>
    </ul> -->
