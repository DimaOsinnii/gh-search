import { combineReducers } from "redux";

import * as actions from "../../constants";

const setRepos = (state, name, page, payload) => {
  if (!payload.length) {
    return state;
  }

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

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case actions.GET_REPOSITORIES:
        return true;
      case actions.GET_REPOSITORIES_SUCCESS:
      case actions.GET_REPOSITORIES_FAILURE:
        return false;
      default:
        return state;
    }
  };

  return combineReducers({
    allRepos,
    isFetching,
  });
};

export default listOfRepos;
