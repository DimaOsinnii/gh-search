import { combineReducers } from "redux";

import * as actions from "../../constants";

const setRepos = (state, name, page, payload) => {
  if (!state[name]) {
    return {
      ...state,
      [name]: {
        page: 1,
        repos: payload,
      },
    };
  }
  return {
    ...state,
    [name]: {
      page,
      repos: [...state[name].repos, ...payload],
    },
  };
};

const listOfRepos = () => {
  const allRepos = (state = {}, action) => {
    const { type, payload, page, name } = action;
    switch (type) {
      case actions.GET_REPOSITORIES_SUCCESS:
        return setRepos(state, name, page, payload);
      default:
        return state;
    }
  };

  return combineReducers({
    allRepos,
  });
};

export default listOfRepos;

// Reducer
