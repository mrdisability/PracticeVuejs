<template>
<!-- Form to enter github access token -->
  <form @submit.prevent="saveToken">
      <!-- @submit.prevent directive lets us run saveToken and event.preventDefault() at the same time -->
      <!-- The @ symbol is short for the v-on directive, which listens to the submit event -->
    <div>
      <label for="githubToken">Github Token</label>
      <br />
      <!-- v-model directive to bind the input value to the githubToken reactive property -->
      <!-- Similar to ngModel -->
      <input id="githubToken" v-model="githubToken" />
    </div>
    <div>
      <input type="submit" value="Save token" />
      <button type="button" @click="clearToken">Clear token</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "GitHubTokenForm",
  data() {
    return {
      githubToken: "",
    };
  },
  //Licecycle hook that lets us get the value from local storage
  beforeMount() {
    this.githubToken = localStorage.getItem("github-token");
  },
  methods: {
    saveToken() {
        //Saved to localStorage
      localStorage.setItem("github-token", this.githubToken);
    },
    clearToken() {
      localStorage.clear();
    },
  },
};
</script>
