<template>
  <div v-if="issues.length > 0">
      <!-- Toggle click to show and hide issues -->
    <button @click="showIssues = !showIssues">{{showIssues ? 'Hide' : 'Show'}} issues</button>
    <div v-if="showIssues">
        <!-- When using v-for we need key so entries are displayed correctly -->
      <div v-for="i of issues" :key="i.id">
        <h3>{{i.title}}</h3>
        <a :href="i.url">Go to issue</a>
        <!-- : symbol is short for the v-bind directive indicates we are passing props to a component -->
        <IssueComments :owner="owner" :repo="repo" :issueNumber="i.number" />
      </div>
    </div>
  </div>
</template>

<script>
import { octokitMixin } from "../../mixins/octokitMixin";
import IssueComments from "./issue/Comments.vue";

//We use same mixin to create client

//Adding IssueComments component
export default {
  name: "RepoIssues",
  components: {
    IssueComments,
  },
  props: {
    owner: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
  },
  mixins: [octokitMixin],
  data() {
      //Initial values
    return {
      issues: [],
      showIssues: false,
    };
  },
  //Values sent from parent component
  methods: {
    async getRepoIssues(owner, repo) {
      if (typeof owner !== "string" || typeof repo !== "string") {
        return;
      }
      const octokit = this.createOctokitClient();
      const { data: issues } = await octokit.issues.listForRepo({
        owner,
        repo,
      });
      this.issues = issues;
    },
  },
  //Add watchers to watch props
  watch: {
    owner: {
      immediate: true,
      handler(val) {
        this.getRepoIssues(val, this.repo);
      },
    },
    repo: {
      immediate: true,
      handler(val) {
        this.getRepoIssues(this.issues, val);
      },
    },
  },
};
</script>
