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

  const [pulls, issues, contributors] = await Promise.all([
    RepositoryService.fetchRepoPulls(owner, repo),
    RepositoryService.fetchRepoIssues(owner, repo),
    RepositoryService.fetchRepoContributors(owner, repo),
  ]);

  dispatch(loadRepoDetailsSuccessAction({ pulls, issues, contributors }));
};
