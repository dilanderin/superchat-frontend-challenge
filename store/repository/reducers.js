import * as types from './types';

const initialState = {
  loading: false,
  error: '',
  repoDetails: null,
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
    default:
      return { ...state };
  }
}
