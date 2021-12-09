<template>
  <div class="reposContainer">
    <h2>Repos</h2>

    <ul class="list-group" v-for="r of repos" :key="r.id">
      <li class="list-group-item">{{r.owner.login}}/{{r.name}}</li>
      <Issues :owner="r.owner.login" :repo="r.name" />
    </ul>
    
    <!-- <div v-for="r of repos" :key="r.id">
      <h2>{{r.owner.login}}/{{r.name}}</h2>
      <Issues :owner="r.owner.login" :repo="r.name" />
    </div> -->
  </div>
</template>

<style scoped>
  .reposContainer {
    margin-top: 20px;
  }
</style>

<script>
import Issues from "./repo/Issues.vue";
import { octokitMixin } from "../mixins/octokitMixin";

export default {
  name: "GitHubRepos",
  components: {
    Issues,
  },
  data() {
    return {
      repos: [],
    };
  },
  mixins: [octokitMixin],
//We make a request to the /user/repos endpoint of the GitHub REST API with the octokit.request() method
  async mounted() {
    const octokit = this.createOctokitClient();
    const { data: repos } = await octokit.request("/user/repos");
    this.repos = repos;
  },
};
</script>
