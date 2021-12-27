import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.github.com/',
  params: { per_page: 10 },
});

const RepositoryService = {
  fetchRepoContributors: (owner, repo) =>
    API.get(`/repos/${owner}/${repo}/contributors?sort=contributions`).then(
      ({ data }) => {
        return data;
      },
    ),
  fetchRepos: (owner) =>
    API.get(`/users/${owner}/repos`).then(({ data }) => {
      return data;
    }),
  fetchRepository: (owner, repo) =>
    API.get(`/repos/${owner}/${repo}`).then(({ data }) => {
      return data;
    }),
};

export default RepositoryService;
