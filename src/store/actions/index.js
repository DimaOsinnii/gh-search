import getMethod from "../../utils/api";

import * as actions from "../../constants";

export const getRepositories = () => ({
  type: actions.GET_REPOSITORIES,
});

export const setRepositories = (payload, name, page) => ({
  type: actions.GET_REPOSITORIES_SUCCESS,
  payload,
  name,
  page,
});

export const setRepositoriesFailure = (error) => ({
  type: actions.GET_REPOSITORIES_FAILURE,
  error,
});

export const getData = (name, page) => {
  return (dispatch) => {
    dispatch(getRepositories());
    return getMethod(`repositories?q=${name}&page=${page}&per_page=30`)
      .then((res) => dispatch(setRepositories(res.data.items, name, page)))
      .catch((err) => dispatch(setRepositoriesFailure(err)));
  };
};
