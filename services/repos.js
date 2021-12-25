import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  params: { per_page: 15 },
});

const RepositoryService = {
  fetchRepoPulls: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/pulls?state=all`).then(({ data }) => {
      return data;
    }),
  fetchRepoIssues: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/issues?state=all`).then(({ data }) => {
      return data;
    }),
  fetchRepoContributors: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/contributors`).then(({ data }) => {
      return data;
    }),
};

export default RepositoryService;
