//import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";

import { Octokit } from "@octokit/rest";

export const octokitMixin = {
    methods: {
        createOctokitClient() {
            return new Octokit({
                auth: localStorage.getItem("github-token"),
            });
        }
    }
}

//https://cdn.skypack.dev/@octokit/rest@18.5.4

//import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
