import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  params: { per_page: 10 },
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
    API.get(`/repos/${owner}/${repo}/contributors?sort=contributions`).then(
      ({ data }) => {
        return data;
      },
    ),
  fetchRepos: async (owner) =>
    API.get(`/users/${owner}/repos`).then(({ data }) => {
      return data;
    }),
  fetchRepository: async (owner, repo) =>
    API.get(`/repos/${owner}/${repo}`).then(({ data }) => {
      return data;
    }),
};

export default RepositoryService;
