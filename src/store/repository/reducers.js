import * as types from './types';

const initialState = {
  loading: false,
  error: '',
  repoDetails: { contributors: [], details: [] },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOAD_REPO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_REPO_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        repoDetails: action.payload.repoDetails,
      };
    case types.LOAD_REPO_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case types.LOAD_REPOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        repoList: action.payload.repoList,
      };
    case types.LOAD_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    default:
      return { ...state };
  }
}
