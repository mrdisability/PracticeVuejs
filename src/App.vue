<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <h1 class="pageTitle">Github App</h1>
        <GitHubTokenForm />
        <div class="row">
          <div class="col-md-4">
            <GitHubUser />
          </div>
          <div class="col-md-8">
            <GitHubRepos />
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style scoped>
  .pageTitle {
    text-align: center;
    margin-top: 20px;
  }
</style>

Then we use components in App component
<script>
import GitHubTokenForm from "./components/GitHubTokenForm.vue";
import GitHubRepos from "./components/Repos.vue";
import GitHubUser from "./components/User.vue";

export default {
  name: "App",
  components: {
    GitHubTokenForm,
    GitHubRepos,
    GitHubUser,
  },
};
</script>

