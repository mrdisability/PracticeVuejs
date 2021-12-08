<template>
  <div>
      <!-- Similar to angular with ngif and ngfor etc -->
    <div v-if="comments.length > 0">
      <h4>Comments</h4>
      <div v-for="c of comments" :key="c.id">{{c.user && c.user.login}} - {{c.body}}</div>
    </div>
  </div>
</template>
// Html is in template tags

<script>
import { octokitMixin } from "../../../mixins/octokitMixin";

//props is also used in react
//props are used to pass data to child to child components
//name is how we reference this component in other components
export default {
  name: "IssueComments",
  //props the component accepts
  props: {
      //required is true so prop must be set before component is used
    owner: {
      type: String,
      required: true,
    },
    repo: {
      type: String,
      required: true,
    },
    issueNumber: {
      type: Number,
      required: true,
    },
  },
  data() {
      //initial value of reactive properties
    return {
      comments: [],
    };
  },
  mixins: [octokitMixin],
  methods: {
    async getIssueComments(owner, repo, issueNumber) {
        //They must be strings else return
      if (
        typeof owner !== "string" ||
        typeof repo !== "string" ||
        typeof issueNumber !== "number"
      ) {
        return;
      }
      const octokit = this.createOctokitClient();
      //listComments returns a promise
      const { data: comments } = await octokit.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
      });
      this.comments = comments;
    },
  },
  //Adding watchers to watch props
  watch: {
    owner: {
      immediate: true,
      handler(val) {
        this.getIssueComments(val, this.repo, this.issueNumber);
      },
    },
    repo: {
      immediate: true,
      handler(val) {
        this.getIssueComments(this.owner, val, this.issueNumber);
      },
    },
    issueNumber: {
      immediate: true,
      handler(val) {
        this.getIssueComments(this.owner, this.repo, val);
      },
    },
  },
};
</script>