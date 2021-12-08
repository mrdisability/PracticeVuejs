<template>
  <div>
    <h1>User Info</h1>
    <ul>
      <li>
        <img :src="userData.avatar_url" id="avatar" />
      </li>
      <li>username: {{userData.login}}</li>
      <li>followers: {{userData.followers}}</li>
      <li>plan: {{userData.pla && userData.plan.name}}</li>
    </ul>
  </div>
</template>

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
