<template>
  <div>
    <h1>Github App</h1>
    <GitHubTokenForm />
    <GitHubUser />
    <GitHubRepos />
  </div>
</template>

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

