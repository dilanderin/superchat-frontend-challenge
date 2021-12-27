import RepositoryService from '../../services/repos';

import * as types from './types';

// Actions for loading repo details
export const loadRepoDetailsStartAction = () => {
  return {
    type: types.LOAD_REPO_DETAILS_REQUEST,
  };
};
export const loadRepoDetailsSuccessAction = (repoDetails) => {
  return {
    type: types.LOAD_REPO_DETAILS_SUCCESS,
    payload: { repoDetails },
  };
};
export const loadRepoDetailsFailureAction = (message) => ({
  type: types.LOAD_REPO_DETAILS_FAILURE,
  payload: { message },
});

export const loadRepoDetails = (owner, repo) => async (dispatch) => {
  dispatch(loadRepoDetailsStartAction);

  const [contributors, details] = await Promise.all([
    RepositoryService.fetchRepoContributors(owner, repo),
    RepositoryService.fetchRepository(owner, repo),
  ]);

  dispatch(loadRepoDetailsSuccessAction({ contributors, details }));
};

// Actions for loading repos by user
export const loadReposStartAction = () => {
  return {
    type: types.LOAD_REPOS_REQUEST,
  };
};
export const loadReposSuccessAction = (repoList) => {
  return {
    type: types.LOAD_REPOS_SUCCESS,
    payload: { repoList },
  };
};
export const loadReposFailureAction = (message) => ({
  type: types.LOAD_REPOS_FAILURE,
  payload: { message },
});

export const loadRepos = (owner) => async (dispatch) => {
  dispatch(loadRepoDetailsStartAction);

  RepositoryService.fetchRepos(owner)
    .then((data) => {
      dispatch(loadReposSuccessAction(data));
    })
    .catch((error) => {
      dispatch(loadReposFailureAction(error.response.data));
    });
};
