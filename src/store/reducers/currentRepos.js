import * as actions from "../../constants";

const initialState = {
  loading: false,
  page: 1,
  repos: [],
  error: null,
};

// Reducer
export default (state = initialState, action) => {
  const { type, payload, error, page } = action;
  switch (type) {
    case actions.GET_REPOSITORIES:
      return {
        ...state,
        loading: true,
      };
    case actions.GET_REPOSITORIES_SUCCESS:
      return {
        ...state,
        repos: state.repos.concat(payload),
        loading: false,
        page: page + 1,
      };
    case actions.GET_REPOSITORIES_FAILURE:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
